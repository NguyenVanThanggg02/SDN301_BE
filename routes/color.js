import express from "express";
import { colorController } from "../controllers/index.js";

const colorRouter = express.Router();


colorRouter.get('/listColor', colorController.getAllColor);

export default colorRouter;