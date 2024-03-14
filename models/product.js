import mongoose, { Schema } from "mongoose";
import { commentSchema } from "./comments.js";
import { imageSchema } from "./images.js";
import { sizeSchema } from "./size.js";



const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'ProductName is required'],
        unique: [true, 'Product name is not duplicate']
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Schema.Types.ObjectId,
      ref: "sizes",
      require: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    total_cost: {
        type: Number,
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: "brands",
        require: true,
    },
    color:{
        type: Schema.Types.ObjectId,
      ref: "colors",
      require: true,
    },
    description: {
        type: String,
    },
    images: [imageSchema],
    comments: [commentSchema],
    sizes: [sizeSchema],
}, {
    timestamps: true
});

const Product = mongoose.model('products', productSchema);

export default Product;