import mongoose, { Schema } from "mongoose";

const sizeSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products'
  },
  sizes: [
    {
      size: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});

const Size = mongoose.model('sizes', sizeSchema);

export default  Size;
export { sizeSchema };
