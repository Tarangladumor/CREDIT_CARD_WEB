import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    Author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Card",
    },
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Replies"
        }
    ]
});

export const Comments = mongoose.model("Comments", commentSchema);
