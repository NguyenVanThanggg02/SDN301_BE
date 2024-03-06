import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Tạo model từ schema
const Category = mongoose.model('category', categorySchema);

export default Category
