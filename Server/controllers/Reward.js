import { Reward } from "../models/Reward.js"
import { respond } from "../utils/response.js"
import { Card } from "../models/Card.js";
import mongoose from "mongoose";

// export const addRewards = async (req, res) => {
//     try {
//         const { instruction, points, listData, note,cardId } = req.body;

//         Validate input
//         if (points && !Array.isArray(points)) {
//             return respond(res, "Points should be an array", 400, false);
//         }
//         if (listData && !Array.isArray(listData)) {
//             return respond(res, "List data should be an array", 400, false);
//         }

//         // Create a new Reward document
//         const reward = new Reward({
//             instruction,
//             points: points.length > 0 ? points.map(point => ({
//                 _id: new mongoose.Types.ObjectId(),
//                 key: point.key,
//                 value: point.value
//             })) : [],
//             listData,
//             note
//         });

//         // Save the Reward document
//         const savedReward = await reward.save();

//         const updatedCard = await Card.findByIdAndUpdate(
//             cardId,
//             { $push: {rewards : savedReward._id } },
//             { new: true }
//         ).populate("rewards");

//         return respond(res, "Rewards added successfully", 200, true, savedReward);
//     } catch (error) {
//         console.log(error);
//         return respond(res, "Something went wrong while adding the rewards", 500, false);
//     }
// };

// export const addRewards = async (req, res) => {
//     try {
//         const { instruction, points, listData, note, cardId } = req.body;

//         // Validate input
//         if (points && !Array.isArray(points)) {
//             return respond(res, "Points should be an array", 400, false);
//         }
//         if (listData && !Array.isArray(listData)) {
//             return respond(res, "List data should be an array", 400, false);
//         }

//         // Create a new Reward document
//         const reward = new Reward({
//             instruction,
//             points: points && points.length > 0 ? points.map(point => ({
//                 _id: new mongoose.Types.ObjectId(),
//                 key: point.key,
//                 value: point.value
//             })) : [],
//             listData,
//             note
//         });

//         // Save the Reward document
//         const savedReward = await reward.save();

//         const updatedCard = await Card.findByIdAndUpdate(
//             cardId,
//             { $push: { rewards: savedReward._id } },
//             { new: true }
//         ).populate("rewards");

//         return respond(res, "Rewards added successfully", 200, true, savedReward);
//     } catch (error) {
//         console.log(error);
//         return respond(res, "Something went wrong while adding the rewards", 500, false);
//     }
// };

// Add Rewards
// export const addRewards = async (req, res) => {
//     try {
//         const { instruction, note, cardId } = req.body;

//         // Manually build the points array
//         const points = [];
//         if (req.body["points[0][key]"]) {
//             let i = 0;
//             while (req.body[`points[${i}][key]`]) {
//                 points.push({
//                     _id: new mongoose.Types.ObjectId(), // Generate unique ID for each point
//                     key: req.body[`points[${i}][key]`],
//                     value: req.body[`points[${i}][value]`],
//                 });
//                 i++;
//             }
//         }

//         // Manually build the listData array
//         const listData = [];
//         if (req.body["listData[0]"]) {
//             let i = 0;
//             while (req.body[`listData[${i}]`]) {
//                 listData.push(req.body[`listData[${i}]`]);
//                 i++;
//             }
//         }

//         // Create a new Reward document
//         const reward = new Reward({
//             instruction,
//             points,
//             listData,
//             note,
//         });

//         // Save the Reward document
//         const savedReward = await reward.save();

//         // Update the corresponding card with the new reward ID
//         const updatedCard = await Card.findByIdAndUpdate(
//             cardId,
//             { $push: { rewards: savedReward._id } },
//             { new: true }
//         ).populate("rewards");

//         return respond(res, "Rewards added successfully", 200, true, updatedCard);
//     } catch (error) {
//         console.log(error);
//         return respond(res, "Something went wrong while adding the rewards", 500, false);
//     }
// };

export const addRewards = async (req, res) => {
    try {
        const { instruction, note, cardId, points, listData } = req.body;

        // Validate points and listData
        if (!Array.isArray(points)) {
            return respond(res, "Points should be an array", 400, false);
        }

        const validPoints = points.map(point => ({
            _id: new mongoose.Types.ObjectId(),
            key: point.key,
            value: Array.isArray(point.value) ? point.value : [point.value],
        }));

        const validListData = Array.isArray(listData) ? listData : [];

        // Create a new Reward document
        const reward = new Reward({
            instruction,
            points: validPoints,
            listData: validListData,
            note,
        });

        // Save the Reward document
        const savedReward = await reward.save();

        // Update the corresponding card with the new reward ID
        const updatedCard = await Card.findByIdAndUpdate(
            cardId,
            { $push: { rewards: savedReward._id } },
            { new: true }
        ).populate("rewards");

        return respond(res, "Rewards added successfully", 200, true, updatedCard);
    } catch (error) {
        console.error(error);
        return respond(res, "Error while adding rewards", 500, false);
    }
};



// Update Rewards
export const updateRewards = async (req, res) => {
    try {
        const { rewardId, instruction, points, listData, note } = req.body;

        if (!rewardId) {
            return respond(res, "Reward ID is required", 400, false);
        }

        // Find the Reward document by ID
        const reward = await Reward.findById(rewardId);

        if (!reward) {
            return respond(res, "Reward not found", 404, false);
        }

        // Update fields if provided
        if (instruction !== undefined) {
            reward.instruction = instruction;
        }

        if (note !== undefined) {
            reward.note = note;
        }

        if (Array.isArray(listData)) {
            reward.listData = listData; // Replace existing listData
        }

        // Update points if provided
        if (Array.isArray(points)) {
            points.forEach(({ _id, key, value }) => {
                if (_id) {
                    // Find the index of the point to update
                    const pointIndex = reward.points.findIndex(point => point._id.toString() === _id.toString());

                    if (pointIndex !== -1) {
                        // Update the existing point
                        if (key !== undefined) {
                            reward.points[pointIndex].key = key;
                        }
                        if (value !== undefined) {
                            reward.points[pointIndex].value = value;
                        }
                    } else {
                        return respond(res, `Point with ID ${_id} not found`, 404, false);
                    }
                } else {
                    return respond(res, "Point ID is required for updates", 400, false);
                }
            });
        }

        // Save the updated Reward document
        const updatedReward = await reward.save();

        return respond(res, "Reward updated successfully", 200, true, updatedReward);
    } catch (error) {
        console.log(error);
        return respond(res, "Something went wrong while updating the reward", 500, false);
    }
};

// Delete Rewards
export const deleteRewards = async (req, res) => {
    try {
        const { rewardId, cardId } = req.body;

        if (!rewardId) {
            return respond(res, "Reward ID is required", 400, false);
        }

        // Remove the reward reference from the Card
        const updatedCard = await Card.findByIdAndUpdate(
            cardId,
            { $pull: { rewards: rewardId } },
            { new: true }
        ).populate("rewards");

        if (!updatedCard) {
            return respond(res, "Card not found", 404, false);
        }

        // Delete the Reward document
        await Reward.findByIdAndDelete(rewardId);

        return respond(res, "Rewards deleted successfully", 200, true, updatedCard);
    } catch (error) {
        console.log(error);
        return respond(res, "Something went wrong while deleting the rewards", 500, false);
    }
};
