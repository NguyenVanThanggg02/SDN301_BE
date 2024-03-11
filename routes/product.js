import express from "express";
import { productController } from "../controllers/index.js";

const productRouter = express.Router();

//get all products
productRouter.get('/', productController.getAllProducts);


//get product
productRouter.get('/:id', productController.getProductById);
//POSR :/products
productRouter.post('/createProduct', productController.createProduct);

export default productRouter
