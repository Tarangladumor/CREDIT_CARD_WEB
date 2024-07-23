import mongoose from "mongoose"

const applySchema = new mongoose.Schema({
    instruction : {
        type: String,
    },
    points: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId(),
            },
            key: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        }
    ],
    note : {
        type : String
    }
})

export const Apply = mongoose.model("Apply",applySchema)