import Color from "../models/color.js";

const fetchAllColor = async () => {
    try {
      return await Color.find({}).exec();
    } catch (error) {
      throw new Error(error.toString());
    }
  };
  

  export default {
    fetchAllColor
  }