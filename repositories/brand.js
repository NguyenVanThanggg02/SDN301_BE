import Brand from "../models/brand.js";

const fetchAll = async () => {
  try {
    return await Brand.find({}).exec();
  } catch (error) {
    throw new Error(error.toString());
  }
};


const getBrandByProductId = async (id) => {
  try {
    const brandById = await Brand.findOne({ productId: id }).exec();
    return brandById;
  } catch (error) {
    throw new Error(error.toString());

  }
}


export default {
  fetchAll, getBrandByProductId
}
