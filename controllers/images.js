import { imageRepo } from "../repositories/index.js";
// Fetch all products
const getAllImages = async (req, res) => {
    try {
        const allImages = await imageRepo.fetchAll();
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
        const result = await imageRepo.create({ url, caption, size });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }

}

// Fetch all products by id
const getImagesByProductId = async (req, res) => {
    try {
        const { pid } = req.params
        const images = await imageRepo.findByProductId(pid);
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default {
    getAllImages,
    getImagesByProductId,
    createImage
}