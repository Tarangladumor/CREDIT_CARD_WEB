import { Apply } from "../models/Apply.js"
import { respond } from "../utils/response.js"
import { Card } from "../models/Card.js";
import mongoose from "mongoose";

export const addApply = async (req, res) => {
    try {
        const { instruction, points, note , cardId} = req.body;

        if (!points || !Array.isArray(points) || points.some(point => !point.key || !point.value)) {
            return respond(res, "Points are required and must include key and value", 400, false);
        }

        const apply = new Apply({
            instruction,
            points,
            note
        });

        const savedApply = await apply.save();

        const updatedCard = await Card.findByIdAndUpdate(
            cardId,
            { $push: { howToApply: savedApply._id } },
            { new: true }
        ).populate("howToApply");

        return respond(res, "Apply added successfully", 200, true, updatedCard);
    } catch (error) {
        console.log(error);
        return respond(res, "Something went wrong while adding the Apply", 500, false);
    }
};

export const updateApply = async (req, res) => {
    try {
        const { applyId, instruction, points, note } = req.body;

        if (!applyId) {
            return respond(res, "Apply ID is required", 400, false);
        }

        const apply = await Apply.findById(applyId);

        if (!apply) {
            return respond(res, "Apply not found", 404, false);
        }

        if (instruction !== undefined) {
            apply.instruction = instruction;
        }

        if (note !== undefined) {
            apply.note = note;
        }

        if (Array.isArray(points)) {
            points.forEach(({ _id, key, value }) => {
                if (_id) {

                    const pointIndex = apply.points.findIndex(point => point._id.toString() === _id.toString());

                    if (pointIndex !== -1) {
                        
                        if (key !== undefined) {
                            apply.points[pointIndex].key = key;
                        }
                        if (value !== undefined) {
                            apply.points[pointIndex].value = value;
                        }
                    } else {
                        return respond(res, `Point with ID ${_id} not found`, 404, false);
                    }
                } else {
                    return respond(res, "Point ID is required for updates", 400, false);
                }
            });
        }

        const updatedApply = await apply.save();

        return respond(res, "Apply updated successfully", 200, true, updatedApply);
    } catch (error) {
        console.log(error);
        return respond(res, "Something went wrong while updating the Apply", 500, false);
    }
};

export const deleteApply = async(req,res) => {
    try{
        const {applyId} = req.body

        if(!applyId) {
            return respond(res,"apply id is not found",400,false)
        }

        const updetedCard = await Card.updateOne(
            {howToApply:applyId},
            {$pull: {howToApply:applyId}}
        ).populate("howToApply")

        await Apply.findByIdAndDelete(applyId)

        return respond(res,"Apply deleted successfully",200,true,updetedCard)
    }catch(error) {
        console.log(error)
        return respond(res,"something went wrong while deleting the Apply",500,false)
    }
}