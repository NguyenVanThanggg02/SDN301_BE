import Inventory from "../models/inventory.js";
import Order from "../models/order.js";
import OrderDetail from "../models/orderDetail.js";

export const changStatusOrder = async (req, res) => {
    const { orderId } = req.body;

    try {
        // Tìm đơn hàng với orderId
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
        }

        // Kiểm tra xem trạng thái của đơn hàng có phải là "Pending" không
        if (order.status !== 'Pending') {
            return res.status(400).json({ message: 'Không thể gửi đơn hàng này' });
        }

        // Cập nhật trạng thái đơn hàng thành "Shipped"
        order.status = 'Shipped';
        await order.save();

        // Lấy thông tin sản phẩm từ đơn hàng
        const orderDetails = await OrderDetail.find({ order: orderId });

        // Cập nhật số lượng sản phẩm trong kho và tạo bản ghi mới trong receipt
        for (const detail of orderDetails) {
            const inventory = await Inventory.findOneAndUpdate(
                { productId: detail.product },
                { $inc: { quantity: -detail.quantity } },
                { new: true }
            );

            // Tạo bản ghi mới trong receipt
            const receipt = new Receipt({
                product_id: detail.product,
                price: detail.price,
                type: 'out',
                quantity: detail.quantity,
                total: detail.total_cost,
            });
            await receipt.save();
        }

        return res.json({ message: 'Đơn hàng đã được gửi thành công' });
    } catch (error) {
        console.error('Lỗi khi xử lý đơn hàng:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi xử lý đơn hàng' });
    }
}