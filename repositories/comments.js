import Comment from "../models/comments.js";
import Product from "../models/product.js";

const fetchAllById = async (id) => {
  try {
    const allComments = await Comment.find({ productId: id })
      .populate("userId")
      .exec();
    return allComments;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const addComment = async ({ userId, text, productId }) => {
  try {
    const productObjectId = new mongoose.Types.ObjectId(productId);
    const product = await Product.findById(productObjectId)
      .populate("comments")
      .populate("users")
      .exec();
    if (!product) {
      throw new Error(error.toString());
    }
    const comment = await Comment.create({ userId, text });
    product.comments.push(comment);
    await product.save();
    return comment;
  } catch (error) {
    throw new Error(error.toString());
  }
};


const deleteCommentsById = async (id) => {
  try {
    const deleteComment = await Comment.deleteOne({ _id: id });
    return deleteComment;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const editComment = async (id, newText) => {
  try {
    const updatedComment = await Comment.findOneAndUpdate({_id:id},  newText , { new: true });
    return updatedComment;
  } catch (error) {
    throw new Error(error.toString());
  }
};





export default {
  fetchAllById,
  addComment,
  deleteCommentsById,
  editComment
}
