import mongoose, { Schema } from "mongoose";


const brandSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  });
  
  const Brand = mongoose.model('Brand', brandSchema);
  export default  Brand;