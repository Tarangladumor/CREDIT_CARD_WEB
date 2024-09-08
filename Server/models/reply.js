import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
    Author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
        required: true
    }
});

export const Replies = mongoose.model("Replies", replySchema);
