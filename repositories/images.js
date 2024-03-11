import Image from "../models/images.js";
//Operation CRUD product

//C:Create a new Image

const create = async ({ text, rate, author }) => {
    try {
        const newImage = await Image.create({ text, rate, author });
        return newImage._doc;
    } catch (error) {
        throw new Error(error.toString())
    }
}

//R:Fetch all  new Image

const fetchAll = async () => {
    try {
        return await Image.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R:Fetch all  new Image by Id

const fetchAllImageById = async (id) => {
    try {
        const allImages = await Image.find({ _id: id }).exec();
        return allImages.map(product => product._doc);
    } catch (error) {
        throw new Error(error.toString());
    }
}

export default {
    create, fetchAll, fetchAllImageById
}