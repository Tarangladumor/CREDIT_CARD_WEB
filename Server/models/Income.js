import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    card: [
        {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }
    ]
})

export const Income = mongoose.model("Income",incomeSchema)