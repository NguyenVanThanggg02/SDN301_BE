import { imageDAO } from "../repositories/index.js";
// Fetch all products
const getAllImages = async (req, res) => {
    try {
        const allImages = await imageDAO.fetchAll();
        res.status(200).json(allImages);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

// Create a new product
const createImage = async (req, res) => {
    // Get data from request body 
    try {
        const { name, price } = req.body;
        const result = await imageDAO.create({ url, caption, size });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }

}

// Fetch all products by id
const getImageById = async (req, res) => {
    try {
        const productId = req.params.id
        const allImages = await imageDAO.fetchAllImageById(productId);
        if (allImages) {
            res.status(200).json({
                message: "Load data successfully",
                data: allImages,
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
    getAllImages, getImageById, createImage
}