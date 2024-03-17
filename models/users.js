import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      default: "" 

    },
    username: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      default: "" 

    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", ""],
      default: "",
    },
    birthday: {
      type: Date,
      default: null 
    },
    phone: {
      type: Number,
      default: "" 
    },
    address: {
      type: String,
      default: "" 
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

export default Users;