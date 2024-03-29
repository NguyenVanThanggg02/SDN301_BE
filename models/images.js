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
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products', // 'Product' là tên của model sản phẩm
    }
}, {
    timestamps: true
});

// Tạo model từ schema
const Image = mongoose.model('images', imageSchema);

export default Image
export { imageSchema };

