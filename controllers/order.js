import Image from "../models/images.js";
import Inventory from "../models/inventory.js";
import Order from "../models/order.js";
import OrderDetail from "../models/orderDetail.js";
import Product from "../models/product.js";
import Receipt from "../models/receipt.js";
import Size from "../models/size.js";

export const changStatusOrder = async (req, res) => {
    const { orderId } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order does not exist!' });
        }
        if (order.status !== 'Pending') {
            return res.status(400).json({ message: 'This order cannot be submitted!' });
        }
        const orderDetails = await OrderDetail.find({ order: orderId });
        for (const detail of orderDetails) {
            const inventory = await Inventory.findOne({ productId: detail.product })
            if (!inventory) {
                return res.status(404).json({ message: 'Product in stock is out of stock!' });
            } else {
                await Inventory.findOneAndUpdate(
                    { productId: detail.product },
                    { $inc: { quantity: -detail.quantity } },
                    { new: true }
                );
                const receipt = new Receipt({
                    product_id: detail.product,
                    price: detail.price,
                    type: 'out',
                    quantity: detail.quantity,
                    total: detail.total_cost,
                });
                await receipt.save();
            }
        }
        order.status = 'Shipped';
        await order.save();
        return res.json({ message: 'The order has been paid successfully!', success: true });
    } catch (error) {
        console.error('Error when processing order:', error);
        return res.status(500).json({ message: 'An error occurred while processing the order!' });
    }
}
export const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity, price } = req.body;
        let order = await Order.findOne({ user: userId, status: "Pending" });
        let orderDetail
        if (!order) {
            order = new Order({ user: userId, status: "Pending", total: quantity * price });
            await order.save();
            orderDetail = new OrderDetail({
                order: order._id,
                product: productId,
                quantity: quantity,
                price: price,
                total_cost: quantity * price
            });
            await orderDetail.save();
        } else {
            order.total += quantity * price
            await order.save();
            orderDetail = await OrderDetail.findOne({ order: order._id, product: productId });
            if (!orderDetail) {
                orderDetail = new OrderDetail({
                    order: order._id,
                    product: productId,
                    quantity: quantity,
                    price: price,
                    total_cost: quantity * price
                });
                await orderDetail.save();
            } else {
                orderDetail.quantity += quantity;
                await orderDetail.save();
            }
        }
        res.status(200).json({ message: 'Order updated successfully', success: true });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const listCart = async (req, res) => {
    try {
        const { userId } = req.query;
        let order = await Order.findOne({ user: userId, status: "Pending" });
        const orderDetail = await OrderDetail.find({ order: order._id }).exec();
        let list = []
        for (const o of orderDetail) {
            let c = {}
            const p = await Product.findOne({ _id: o.product }).exec()
            if (p) {
                const image = await Image.findOne({ _id: p.images[0] })
                const size = await Size.findOne({ _id: p.size }).exec()
                c._id = o._id
                c.quantity = o.quantity
                c.price = o.price
                c.total_cost = o.total_cost
                c.name = p.name
                c.brand = p.brand
                c.color = p.color
                c.image = image.url
                c.size = size && size.size ? size.size : p.size
                list.push(c)
            }
        }
        res.status(200).json({
            id: order._id,
            data: list,
            total_cost: order.total,
            message: 'Get List successfully',
            success: true
        });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const countOrder = async (req, res) => {
    try {
        const count = await Order.countDocuments({ status: "Shipped" });

        res.json({ orders_to_deliver: count, mess: "Get data successfully", success: true });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });

    }
}