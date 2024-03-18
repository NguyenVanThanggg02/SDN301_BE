import Order from "../models/order.js";
import OrderDetail from "../models/orderDetail.js";

export const delOrderDetail = async (req, res) => {
    try {
        const { detailId } = req.body
        const detail = await OrderDetail.findOne({ _id: detailId }).exec()
        const order = await Order.findOne({ _id: detail.order }).exec()
        order.total -= detail.total_cost
        await order.save();
        const deleteOrderDetail = await OrderDetail.deleteOne({ _id: detailId }).exec()
        res.status(200).json({ data: deleteOrderDetail, message: 'Delete order details successfully', success: true });
    } catch (error) {
        console.error('Error deleting order detail:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}