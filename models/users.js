import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      default: "" 

      // required: true,
    },
    username: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      default: "" 

      // required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },
    birthday: {
      type: Date,
      default: "" 
      // required: true,
    },
    phone: {
      type: Number,
      default: "" 
      // required: true,
    },
    address: {
      type: String,
      default: "" 
      // required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

export default Users;