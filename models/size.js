import mongoose, { Schema } from "mongoose";

const sizechema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
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

const Size = mongoose.model('Size', sizechema);

export default  Size;