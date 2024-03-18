import Image from "../models/images.js";
import Product from "../models/product.js";
import Receipt from "../models/receipt.js";
import Size from "../models/size.js";

export const sumWeekSale = async (req, res) => {
    try {
        const now = new Date();
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 6);

        const result = await Receipt.aggregate([
            {
                $match: {
                    type: "out",
                    createdAt: { $gte: startOfWeek, $lte: endOfWeek },
                },
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$total" },
                },
            },
        ]);

        res.json({ total: result.length > 0 ? result[0].total : 0 });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getTop5SellingProducts = async (req, res) => {
    try {

        const result = await Receipt.aggregate([
            {
                $match: {
                    type: "out"
                }
            },
            {
                $group: {
                    _id: "$product_id",
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $sort: { totalQuantity: -1 }
            },
            {
                $limit: 5
            }
        ])
        let list = []

        for (const i of result) {
            let c = {}
            const p = await Product.findOne({ _id: i._id }).exec()
            if (p) {
                const image = await Image.findOne({ _id: p.images[0] })
                const size = await Size.findOne({ _id: p.size }).exec()
                c._id = i._id
                c.name = p.name
                c.image = image.url
                c.size = size && size.size ? size.size : p.size
                c.export_price = p.price
                c.quantity = i.totalQuantity
                list.push(c)
            }
        }
        res.json({
            data: list,
            mess: "Get data successfully!",
            success: true
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}