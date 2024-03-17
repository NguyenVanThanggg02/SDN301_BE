import express from "express";
import { getAllProductInInventory, importProduct } from "../controllers/index.js";

const inventoryRouter = express.Router();

//get all inventorys
inventoryRouter.get('/getAll', getAllProductInInventory);


//get inventory
// inventoryRouter.get('/:id', inventoryController.getinventoryById);
//POSR :/inventorys
inventoryRouter.post('/importProduct', importProduct);

export default inventoryRouter
