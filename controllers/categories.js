import { cateDAO } from "../repositories/index.js";
// Fetch all products
const getAllCategories = async (req, res) => {
    try {
        const allCategories = await cateDAO.fetchAll();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

// Create a new product
const createCategory = async (req, res) => {
    try {
        const { name, desc } = req.query;
        const result = await cateDAO.create({ name, desc });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }

}

// Fetch all products by id
const getCategoryById = async (req, res) => {
    try {
        const productId = req.params.id
        const allCategories = await cateDAO.fetchAllCategoryById(productId);
        if (allCategories) {
            res.status(200).json({
                message: "Load data successfully",
                data: allCategories,
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
    getAllCategories, getCategoryById, createCategory
}