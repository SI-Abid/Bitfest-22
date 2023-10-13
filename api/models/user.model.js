import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
        unique: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
    },
    code_name: {
        type: String,
    },
    department: {
        type: String,
    },
    designation: {
        type: String,
    },
    section: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);