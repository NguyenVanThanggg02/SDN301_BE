import express from "express";
import { commentController } from "../controllers/index.js";
import Comment from "../models/comments.js";
import mongoose from "mongoose";
import Product from "../models/product.js";

const commentRouter = express.Router();

//get all comments
commentRouter.get("/:id", commentController.getAllCommentsById);
commentRouter.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find({}).exec();
    if (!comments) throw creaError.NotFound("Comme not found");
    res.send(comments);
  } catch (error) {
    next(error);
  }
});
commentRouter.post("/", async (req, res, next) => {
  try {
    const { text, productId, userId } = req.body;
    const productObjectId = new mongoose.Types.ObjectId(productId);

    console.log(req.body);
    console.log(productObjectId);

    const product = await Product.findById(productObjectId).exec();
    if (!product) {
      throw creaError.NotFound("Video not found");
    }

    const comment = await Comment.create({ text, productId, userId });
    product.comments.push(comment);
    await product.save();

    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    next(error);
  }
});

 commentRouter.delete('/:id', commentController.removeCommentById);
 commentRouter.put('/:id', commentController.updateComment);


// //get comment
// commentRouter.get('/:id', commentController.getCommentById);
// commentRouter.get('/getCommentByProductID', commentController.getCommentByProductId);

// //POSR :/comments
// commentRouter.post('/createComment', commentController.createComment);

export default commentRouter;
