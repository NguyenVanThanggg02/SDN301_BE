import mongoose, { Schema } from "mongoose";

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
        type: Number,
        required: true
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
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String // Assuming you'll store image paths
    }
}, {
    timestamps: true
});

const Product = mongoose.model('products', productSchema);

export default Product;
