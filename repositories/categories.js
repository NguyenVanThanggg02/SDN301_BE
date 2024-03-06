import Category from "../models/categories.js";
//Operation CRUD product

//C:Create a new Category

const create = async ({ name, desc }) => {
    try {
        const newCategory = await Category.create({ name, desc });
        return newCategory._doc;
    } catch (error) {
        throw new Error(error.toString())
    }
}

//R:Fetch all  new Category

const fetchAll = async () => {
    try {
        return await Category.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R:Fetch all  new Category by Id

const fetchAllCategoryById = async (id) => {
    try {
        const allCategories = await Category.find({ _id: id }).exec();
        return allCategories.map(product => product._doc);
    } catch (error) {
        throw new Error(error.toString());
    }
}

export default {
    create, fetchAll, fetchAllCategoryById
}