import Product from "../models/product.js";
//Operation CRUD product

//C:Create a new Product

const create = async ({ name, price, size, quantity, total_cost, brand, description, image }) => {
    try {
        const newProduct = await Product.create({ name, price, size, quantity, total_cost, brand, description, image });
        return newProduct._doc;
    } catch (error) {
        throw new Error(error.toString())
    }
}

//R:Fetch all  new Product

const fetchAll = async () => {
    try {
        return await Product.find({}).populate("images").populate("comments").populate("size").populate("brand").exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R:Fetch all  new Product by Id

const fetchAllProductById = async (id) => {
    try {
        const allProducts = await Product.findOne({ _id: id }).populate("images").populate("comments").exec();
        return allProducts._doc;
    } catch (error) {
        throw new Error(error.toString());
    }
}




const deleteProductById = async (id) => {
    try {
      const deleteProduct = await Product.deleteOne({ _id: id });
      return deleteProduct;
    } catch (error) {
      throw new Error(error.toString());
    }
  };

export default {
    create, fetchAll, fetchAllProductById, deleteProductById
}