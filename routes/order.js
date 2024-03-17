import express from "express";
import { changStatusOrder } from "../controllers";

const orderRouter = express.Router();

//get all orders
// orderRouter.get('/', orderController.getAllorders);


//get order
// orderRouter.get('/:id', orderController.getorderById);
//POSR :/orders
orderRouter.post('/changStatusOrder', changStatusOrder);

export default orderRouter
