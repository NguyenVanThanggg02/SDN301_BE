
import Users from "../models/users.js";


const create = async ({ username, password }) => {
    try {
        const newUser = await Users.create({ username, password });
        return newUser._doc;
    } catch (error) {
        throw new Error(error.toString())
    }
}


const fetchAll = async () => {
    try {
        return await Users.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R:Fetch all  new Product by Id

// const fetchAllProductById = async (id) => {
//     try {
//         const allProducts = await Products.find({ _id: id }).exec();
//         return allProducts.map(product => product._doc);
//     } catch (error) {
//         throw new Error(error.toString());
//     }
// }
const getUserByUsername = async (username) => {
    try {
        return await Users.findOne({ username: username }).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}
export default {
    create, fetchAll, getUserByUsername
}