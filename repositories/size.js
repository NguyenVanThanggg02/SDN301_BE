import Size from '../models/size.js';

// get Size
const fetchAllSize = async () => {
    try {
        const size = await Size.find({}).exec();
        return size;
    } catch (error) {
        throw new Error(error.toString());
    }
}

const findSizeByProductId = async (productId) => {
    try {
        const sizes = await Size.find({ productId:productId }).exec();
        return sizes;
    } catch (error) {
        throw new Error('Error while fetching images by product ID');
    }
}

export default {
    fetchAllSize,
    findSizeByProductId
};