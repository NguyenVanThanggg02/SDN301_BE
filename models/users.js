// models/users.js

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        default: "" 
    },
    gender: {
        type: Boolean,
        default: false 
    },
    birthday: {
        type: Date,
        default: null 
    },
    phone: {
        type: String,
        default: "" 
    },
    address: {
        type: String,
        default: "" 
    },
    role: {
        type: Number,
        default: 0 
    },
}, {
    timestamps: true
});

const Users = mongoose.model("users", userSchema);

export default Users;
