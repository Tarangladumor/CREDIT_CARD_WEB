import mongoose from "mongoose";

const ratingAndReviewsSchema = new mongoose.Schema({
    Author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Card",
    },
    createdAt: {
        type: Date,
        default:Date.now,
    },
})

export const RatingAndReviews = mongoose.model("RatingAndReviews",ratingAndReviewsSchema)