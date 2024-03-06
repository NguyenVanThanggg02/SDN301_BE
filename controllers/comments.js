import { commentDAO } from "../repositories/index.js";
// Fetch all products
const getAllComments = async (req, res) => {
    try {
        const allComments = await commentDAO.fetchAll();
        res.status(200).json(allComments);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

// Create a new product
const createComment = async (req, res) => {
    // Get data from request body 
    try {
        const { text, rate, author, productId } = req.body;
        const result = await commentDAO.create({ text, rate, author, productId });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }

}

// Fetch all products by id
const getCommentById = async (req, res) => {
    try {
        const productId = req.params.id
        const allComments = await commentDAO.fetchAllCommentById(productId);
        if (allComments) {
            res.status(200).json({
                message: "Load data successfully",
                data: allComments,
            })
        } else {
            res.status(404).json('Not found')
        }
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}
const getCommentByProductId = async (req, res) => {
    try {
        const productId = req.params.id
        const allComments = await commentDAO.fetchAllCommentByProductId(productId);
        if (allComments) {
            res.status(200).json({
                message: "Load data successfully",
                data: allComments,
            })
        } else {
            res.status(404).json('Not found')
        }
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

export default {
    getAllComments, getCommentById, createComment, getCommentByProductId
}