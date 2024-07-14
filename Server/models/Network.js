import mongoose from "mongoose";

const networkSchema = new mongoose.Schema({
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

export const Network = mongoose.model("Network",networkSchema)