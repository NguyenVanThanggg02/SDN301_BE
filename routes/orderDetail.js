import express from "express";
import { delOrderDetail } from "../controllers/orderDetail.js";

const orderDetailRouter = express.Router();

//get all orderDetails
// orderDetailRouter.get('/getorderDetailDetail', listCart);


//get orderDetail
// orderDetailRouter.get('/:id', orderDetailController.getorderDetailById);
//POSR :/orderDetails
// orderDetailRouter.post('/changStatusorderDetail', changStatusorderDetail);
orderDetailRouter.post('/delOrderDetail', delOrderDetail);


export default orderDetailRouter
