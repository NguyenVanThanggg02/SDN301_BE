import express from "express";
import { brandController } from "../controllers/index.js";

const brandRouter = express.Router();


brandRouter.get('/listBrand', brandController.getAllBrands);

export default brandRouter;