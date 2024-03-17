import mongoose from "mongoose";


const brandSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    // description: {
    //   type: String,
    //   required: true
    // },
    // country: {
    //   type: String,
    //   required: true
    // }
  });
  
  const Brand = mongoose.model('brands', brandSchema);
  export default  Brand;