import express from "express";
import { cateController } from "../controllers/index.js";

const categoryRouter = express.Router();

//get all categorys
categoryRouter.get('/', cateController.getAllCategories);


//get category
categoryRouter.get('/:id', cateController.getCategoryById);
//POSR :/categorys
categoryRouter.post('/', cateController.createCategory);

export default categoryRouter