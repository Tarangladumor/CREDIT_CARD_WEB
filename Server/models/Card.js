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
    includedBnefits: {
        type: [String],
        required:true
    },
    notIncludedBnefits: {
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
    rewards : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Reward"
        }
    ],
    howToApply : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Apply"
        }
    ],
    eligibility : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Eligibility"
        }
    ],
    bestFor: {
        type: String
    },
    income: {
        type: String,
    },
    createdAt: {
        type: Date,
        default:Date.now,
    },
})

export const Card = mongoose.model("Card",cardSchema)