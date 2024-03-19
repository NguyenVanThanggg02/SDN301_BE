import { uploadImage } from "../middleware/uploadImage.js";
import { productDAO } from "../repositories/index.js";
// Fetch all products
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productDAO.fetchAll();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

// Create a new product
const createProduct = async (req, res) => {
    try {
        uploadImage.single('image')(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ message: err.message });
            }

            // Thực hiện xử lý tạo sản phẩm
            const { name, price, size, quantity, total_cost, brand, description } = req.body;
            const image = req.file.path; // Đường dẫn hình ảnh
            const result = await productDAO.create({ name, price, size, quantity, total_cost, brand, description, image });

            res.status(201).json(result);
        });
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        })
    }
}

// Fetch all products by id
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const allProducts = await productDAO.fetchAllProductById(productId);
        if (allProducts) {
            res.status(200).json(allProducts)
        } else {
            res.status(404).json('Not found')
        }
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}


const removeProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await productDAO.deleteProductById(productId);
      if (deletedProduct) {
        res.status(200).json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.toString() });
    }
  };



export default {
    getAllProducts, getProductById, createProduct,removeProductById
}