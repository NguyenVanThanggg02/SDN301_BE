import Inventory from "../models/inventory.js";
import Receipt from "../models/receipt.js";

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
        const inventory = await Inventory.find().populate('productId').populate('size');
        const products = inventory.map(item => ({
            _id: item._id,
            productId: item.productId._id,
            name: item.productId.name,
            // image:
            type: item.type,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            timestamp: item.timestamp
        }));
        res.json(products);
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}