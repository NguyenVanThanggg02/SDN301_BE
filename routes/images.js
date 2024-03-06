import express from "express";
import { imageController } from "../controllers/index.js";

const imageRouter = express.Router();

//get all images
imageRouter.get('/', imageController.getAllImages);


//get image
imageRouter.get('/:id', imageController.getImageById);
//POSR :/images
imageRouter.post('/', imageController.createImage);

export default imageRouter