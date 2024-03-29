import express from "express";
import { addToCart, changStatusOrder, countOrder, getAllOrder, listCart } from "../controllers/order.js";

const orderRouter = express.Router();

//get all orders
orderRouter.get('/getAll', getAllOrder);
orderRouter.get('/getOrderDetail', listCart);
orderRouter.get('/countOrdersToDeliver', countOrder);



//get order
// orderRouter.get('/:id', orderController.getorderById);
//POSR :/orders
orderRouter.post('/changStatusOrder', changStatusOrder);
orderRouter.post('/addToCart', addToCart);


export default orderRouter
