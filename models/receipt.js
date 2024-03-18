import mongoose, { Schema } from "mongoose";


const receiptSchema = new Schema({
    product_id: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number
    },
}, {
    timestamps: true
});

const Receipt = mongoose.model('receipts', receiptSchema);

export default Receipt;