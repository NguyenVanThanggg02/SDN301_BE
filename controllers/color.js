import { colorDAO } from "../repositories/index.js";

const getAllColor = async (req, res) => {
    try {
      const allColor = await colorDAO.fetchAllColor();
      res.status(200).json(allColor);
    } catch (error) {
      res.status(500).json({
        error: error.toString(),
      });
    }
  };

  export default {
    getAllColor
  }