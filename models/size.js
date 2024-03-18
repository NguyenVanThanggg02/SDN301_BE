import mongoose from "mongoose";

const sizechema = new mongoose.Schema({
  size: {
    type: Number,
    required: true
  }
});

const Size = mongoose.model('sizes', sizechema);

export default Size;