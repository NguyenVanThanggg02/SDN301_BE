import Image from "../models/images.js";
import Inventory from "../models/inventory.js";
import Product from "../models/product.js";
import Receipt from "../models/receipt.js";
import Size from "../models/size.js";

export const importProduct = async (req, res) => {
    try {
        const productId = req.body.productId;
        const { quantity, price, size } = req.body;

        let inventoryItem = await Inventory.findOne({ productId: productId, size: size });
        if (inventoryItem) {
            inventoryItem.quantity += quantity;
            await inventoryItem.save();
        } else {
            inventoryItem = new Inventory({
                productId: productId,
                type: 'in',
                quantity: quantity,
                price: price,
                size: size
            });
            await inventoryItem.save();
        }

        const newReceipt = new Receipt({
            product_id: productId,
            price: price,
            type: 'in',
            quantity: quantity,
            total: price * quantity
        });
        await newReceipt.save();

        res.status(200).json({ message: 'Inventory updated and receipt created successfully' });
    } catch (error) {
        console.error('Error updating inventory and creating receipt:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const getAllProductInInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find().exec()
        let list = []
        for (const i of inventory) {
            let c = {}
            const p = await Product.findOne({ _id: i.productId }).exec()
            if (p) {
                const image = await Image.findOne({ _id: p.images[0] })
                const size = await Size.findOne({ _id: p.size }).exec()
                c._id = i._id
                c.name = p.name
                c.type = i.type
                c.image = image.url
                c.size = size && size.size ? size.size : p.size
                c.import_price = i.price
                c.export_price = p.price
                c.quantity = i.quantity
                list.push(c)
            }
        }
        res.status(200).json({
            data: list,
            message: 'Get List successfully',
            success: true
        });
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}