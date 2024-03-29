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
    }
}, {
    timestamps: true
});

// Tạo model từ schema
const Comment = mongoose.model('comments', commentSchema);

export default Comment
export { commentSchema };

