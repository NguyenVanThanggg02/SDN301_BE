import mongoose, { Schema } from "mongoose";


const imageSchema = new Schema({
    url: {
        type: String,
    },
    caption: {
        type: String,
    },
    size: {
        type: String,
    }
}, {
    timestamps: true
});

// Tạo model từ schema
const Image = mongoose.model('image', imageSchema);

export default Image

