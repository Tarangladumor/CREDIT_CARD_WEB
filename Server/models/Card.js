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
        type: String,
    },
    provider: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "provider"
        }
    ],
    network: {
        type: String,
        required: true
    },
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
        type: String,
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
    ]
})

export const Card = mongoose.model("Card",cardSchema)