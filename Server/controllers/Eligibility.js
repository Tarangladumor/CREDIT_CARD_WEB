import { Card } from "../models/Card.js"
import { Eligibility } from "../models/Eligibility.js"
import { respond } from "../utils/response.js"

export const addEligibility = async (req, res) => {
    try {
        const { instruction, points, cardId } = req.body;

        if (!Array.isArray(points) || points.some(p => !p.key || !p.value)) {
            return respond(res, "Each point must have both key and value", 400, false);
        }

        const eligibility = new Eligibility({
            instruction,
            points,
        });

        const savedEligibility = await eligibility.save();

        const updatedCard = await Card.findByIdAndUpdate(
            cardId,
            { $push: { eligibility: savedEligibility._id } },
            { new: true }
        ).populate("eligibility");

        if (!updatedCard) {
            return respond(res, "Card not found", 404, false);
        }

        return respond(res, "Eligibility added successfully", 200, true, updatedCard);
    } catch (error) {
        console.log(error);
        return respond(res, "Something went wrong while adding the eligibility", 500, false);
    }
};

export const updateEligibility = async (req, res) => {
    try {
        const { eligibilityId, instruction, points } = req.body;

        if (!eligibilityId) {
            return respond(res, "Eligibility ID is required", 400, false);
        }

        const eligibility = await Eligibility.findById(eligibilityId);

        if (!eligibility) {
            return respond(res, "Eligibility not found", 404, false);
        }

        if (instruction !== undefined) {
            eligibility.instruction = instruction;
        }

        if (Array.isArray(points)) {
            await Promise.all(points.map(async ({ pointId, key, value }) => {
                const pointIndex = eligibility.points.findIndex(point => point._id.toString() === pointId);

                if (pointIndex !== -1) {
                    if (key !== undefined) {
                        eligibility.points[pointIndex].key = key;
                    }
                    if (value !== undefined) {
                        eligibility.points[pointIndex].value = value;
                    }
                }
            }));
        }

        const updatedEligibility = await eligibility.save();

        return respond(res, "Eligibility updated successfully", 200, true, updatedEligibility);
    } catch (error) {
        console.log(error);
        return respond(res, "Something went wrong while updating the eligibility", 500, false);
    }
};



export const deleteEligibiity = async(req,res) => {
    try{
        const {eligibilityId} = req.body

        if(!eligibilityId) {
            return respond(res,"Eligibility id is not found",400,false)
        }

        const updatedCard = await Card.updateOne(
            {eligibility:eligibilityId},
            {$pull: {eligibility:eligibilityId}}
        ).populate("eligibility")

        await Eligibility.findByIdAndDelete(eligibilityId)
        
        return respond(res,"Eligibiity deleted successfully",200,true,updatedCard)
    }catch(error) {
        console.log(error)
        return respond(res,"something went wrong while deleting the Eligibiity",500,false)
    }
}