import { brandDAO } from "../repositories/index.js";

const getAllBrands = async (req, res) => {
  try {
    const allBrands = await brandDAO.fetchAll();
    res.status(200).json(allBrands);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};
const fetBrandByProductId = async (req, res) => {
  try {
    const brandById = await brandDAO.getBrandByProductId(req.params.id);
    res.status(200).json(brandById);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
}

export default {
  getAllBrands,
  fetBrandByProductId
}
