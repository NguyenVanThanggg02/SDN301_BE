import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userGender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },
    userDob: {
      type: Date,
      required: true,
    },
    userPhone: {
      type: String,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
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

const User = mongoose.model("User", userSchema);

export default User;
