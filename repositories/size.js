import Size from '../models/size.js';

// get Size
const getAllSize = async (username) => {
    try {
        const size = await Size.find({}).exec();
        return size;
    } catch (error) {
        throw new Error(error.toString());
    }
}

export default {
    getAllSize
};