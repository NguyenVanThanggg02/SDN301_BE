import Comment from "../models/comments.js";
//Operation CRUD product

//C:Create a new Comment

const create = async ({ text, rate, author, productId }) => {
    try {
        const newComment = await Comment.create({ text, rate, author, productId });
        return newComment._doc;
    } catch (error) {
        throw new Error(error.toString())
    }
}

//R:Fetch all  new Comment

const fetchAll = async () => {
    try {
        return await Comment.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}

//R:Fetch all  new Comment by Id

const fetchAllCommentById = async (id) => {
    try {
        const allComments = await Comment.find({ _id: id }).exec();
        return allComments.map(product => product._doc);
    } catch (error) {
        throw new Error(error.toString());
    }
}
const fetchAllCommentByProductId = async (id) => {
    try {
        const allComments = await Comment.filter({ productId: id }).exec();
        return allComments.map(product => product._doc);
    } catch (error) {
        throw new Error(error.toString());
    }
}

export default {
    create, fetchAll, fetchAllCommentById, fetchAllCommentByProductId
}