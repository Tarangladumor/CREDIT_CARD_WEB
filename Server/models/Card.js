import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
    cardName: {
        type:String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: [String],
    },
    provider: 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Provider"
        },
    
    network: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Network"
        }
    ],
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReviews"
        }
    ],
    comments: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comments"
        }
    ],
    benefits: {
        type: [String],
        required:true
    },
    additionalBenefits: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "AdditionalBenefits"
        }
    ],
    faq: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Faq"
        }
    ],
    charges: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Charges"
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now,
    },
})

export const Card = mongoose.model("Card",cardSchema)