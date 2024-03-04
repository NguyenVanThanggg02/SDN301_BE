import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0)
        throw new Error(
          "Price must be a number and greater than or equal zero"
        );
    },
  },
  description: {
    type: String,
  },
  colors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color",
    },
  ],
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  quantity: {
    type: Number,
    default: 0,
  },
  costPrice: {
    type: Number,
  },
  salePrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
