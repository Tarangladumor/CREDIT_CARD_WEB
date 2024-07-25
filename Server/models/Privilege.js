import mongoose from "mongoose";

const privilegeSchema = new mongoose.Schema({
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

export const Privilege = mongoose.model("Privilege",privilegeSchema)