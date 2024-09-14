// import mongoose from "mongoose"

// const rewardSchema = new mongoose.Schema({
//     instruction : {
//         type: String,
//     },
//     points: [
//     {
//         _id: {
//             type: mongoose.Schema.Types.ObjectId,
//             default: () => new mongoose.Types.ObjectId(),
//         },
//         key: {
//             type: String,
//             required: true,
//         },
//         value: {
//             type: String,
//             required: true,
//         },
//     }
// ],
//     listData : [
//         {
//             type: String
//         }
//     ],
//     note : {
//         type : String
//     }
// })

// export const Reward = mongoose.model("Reward",rewardSchema)

import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
    instruction: {
        type: String,
        required: true, // Ensuring instruction is mandatory
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
            value: [
                {
                    type: String, // Allowing multiple values
                    required: true,
                }
            ],
        }
    ],
    listData: [
        {
            type: String,
        }
    ],
    note: {
        type: String,
    },
});

export const Reward = mongoose.model("Reward", rewardSchema);

