import mongoose, { Schema } from "mongoose";

const inventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products'
  },
  type: {
    type: String,
    enum: ['in', 'out'],
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
  price: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Inventory = mongoose.model('inventory', inventorySchema);

export default Inventory;