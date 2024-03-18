import { commentDAO } from "../repositories/index.js";
// Fetch all products
const getAllCommentsById = async (req, res) => {
  try {
    const commentProductId = req.params.id;
    console.log(req.params.id);
    const allCommentsProducts = await commentDAO.fetchAllById(commentProductId);
    if (allCommentsProducts) {
      res.status(200).json(allCommentsProducts);
    } else {
      res.status(404).json("Not found");
    }
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const removeCommentById = async (req, res) => {
  try {
    const commentId = req.params.id;
    const deletedComments = await commentDAO.deleteCommentsById(commentId);
    if (deletedComments) {
      res.status(200).json({ message: "Comments deleted successfully" });
    } else {
      res.status(404).json({ message: "Comments not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const addComment = async (req, res, next) => {
  try {
    const { userId, text, productId } = req.body;
    const comment = await commentDAO.addComment({ userId, text, productId });
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res) => {
  try {
    res.status(200).json(await commentDAO.editComment(req.params.id, req.body));
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

export default {
  getAllCommentsById,
  addComment,
  removeCommentById,
  updateComment,
};
