import express from "express";
import { productController } from "../controllers/index.js";

const productRouter = express.Router();

//get all products
productRouter.get('/', productController.getAllProducts);
productRouter.get('/brand/:id', productController.fetchProductByBrandId);


//get product
productRouter.get('/:id', productController.getProductById);
productRouter.delete('/:id', productController.removeProductById );
//POSR :/products
productRouter.post('/createProduct', productController.createProduct);

export default productRouter
