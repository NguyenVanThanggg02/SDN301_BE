import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    text: {
        type: String,
    },
    rate: {
        type: Number,
    },
    author: {
        type: String,
    },
    productId: {
        type: Schema.Types.ObjectId,
    }
}, {
    timestamps: true
});

// Tạo model từ schema
const Comment = mongoose.model('comment', commentSchema);

export default Comment

