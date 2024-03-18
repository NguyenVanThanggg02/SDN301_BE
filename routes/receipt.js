import express from "express";
import { getTop5SellingProducts, sumWeekSale } from "../controllers/receipt.js";

const receiptRouter = express.Router();

receiptRouter.get('/sumWeekSale', sumWeekSale)
receiptRouter.get('/getTop5', getTop5SellingProducts)


export default receiptRouter