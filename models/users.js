import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },
    Dob: {
      type: Date,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
