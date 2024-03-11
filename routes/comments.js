import express from "express";
import { commentController } from "../controllers/index.js";

const commentRouter = express.Router();

//get all comments
commentRouter.get('/', commentController.getAllComments);


//get comment
commentRouter.get('/:id', commentController.getCommentById);
commentRouter.get('/getCommentByProductID', commentController.getCommentByProductId);

//POSR :/comments
commentRouter.post('/createComment', commentController.createComment);

export default commentRouter