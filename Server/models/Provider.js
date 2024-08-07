import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
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

export const Provider = mongoose.model("Provider",providerSchema)