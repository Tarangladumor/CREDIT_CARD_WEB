import mongoose from "mongoose";

const eligibleSchema = new mongoose.Schema({
    instruction: {
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
    // income: {
    //     type: Number,
    // }
});

export const Eligibility = mongoose.model("Eligibility", eligibleSchema);
