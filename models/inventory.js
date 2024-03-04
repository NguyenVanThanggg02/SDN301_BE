import mongoose, { Schema } from "mongoose";

const inventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  type: {
    type: String,
    enum: ['in', 'out'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;