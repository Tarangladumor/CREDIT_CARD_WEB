import {AdditionalBenefits} from "../models/AdditionalBenefits.js";
import { Card } from '../models/Card.js';
import { respond } from '../utils/response.js'; 

export const addAdditionalBenefits = async (req, res) => {
    try {
        // Log the entire raw request body
        console.log("Raw request body:", req.body);

        const { cardId, benefits } = req.body;

        // Validate cardId
        if (!cardId) {
            return respond(res, "Card ID is required", 400, false);
        }

        // Check if the card exists
        const validCard = await Card.findById(cardId);
        if (!validCard) {
            return respond(res, "Card not found", 403, false);
        }

        // Initialize an empty object to hold additional benefits
        const additionalBenefits = {};

        // Ensure benefits is an array before attempting to iterate over it
        if (Array.isArray(benefits)) {
            benefits.forEach(benefit => {
                const { type, listData, note } = benefit;

                // Log each benefit being processed
                console.log("Processing benefit:", benefit);

                additionalBenefits[type] = listData || [];
                if (note) {
                    additionalBenefits[`${type}_note`] = note;
                }
            });
        } else {
            // If benefits is not an array, log an error message
            console.error("Benefits is not an array or is undefined.");
            return respond(res, "Invalid data format for benefits", 400, false);
        }

        // Create the AdditionalBenefits document
        const newBenefits = await AdditionalBenefits.create(additionalBenefits);

        // Update the card with the new additionalBenefits
        await Card.findByIdAndUpdate(
            cardId,
            { $push: { additionalBenefits: newBenefits._id } },
            { new: true }
        );

        return respond(res, "Additional benefits successfully added", 200, true, newBenefits);
    } catch (error) {
        console.log(error);
        return respond(res, "Error in adding additional benefits", 500, false);
    }
};





export const editAdditionalBenefits = async (req, res) => {
    try {
        const { additionalBenefitsId, welcomeBonus, emiBenefit, fuelSurcharge, rewardPoints, loungeAccess, zeroLostCardLiability, milestoneBenefit, otherBenefit, travelBenefit, diningBenefit, conciergeServices } = req.body;

        if (!additionalBenefitsId) {
            return respond(res, "Additional Benefits ID is required", 400, false);
        }

        const updatedBenefits = await AdditionalBenefits.findByIdAndUpdate(
           { _id:additionalBenefitsId},
            {
                welcomeBonus, emiBenefit, fuelSurcharge, rewardPoints, loungeAccess, 
                zeroLostCardLiability, milestoneBenefit, otherBenefit, travelBenefit, 
                diningBenefit, conciergeServices
            },
            { new: true }
        );

        if (!updatedBenefits) {
            return respond(res, "Additional Benefits not found", 404, false);
        }

        return respond(res, "Additional Benefits updated successfully", 200, true, updatedBenefits);
    } catch (error) {
        console.error(error);
        return respond(res, "Error updating additional benefits", 500, false);
    }
};

export const deleteAdditionalBenefits = async (req, res) => {
    try {
        const { additionalBenefitsId, cardId } = req.body;

        if (!additionalBenefitsId || !cardId) {
            return respond(res, "Additional Benefits ID and Card ID are required", 400, false);
        }

       
        await AdditionalBenefits.findByIdAndDelete(additionalBenefitsId);

       
        const updatedCardDetails = await Card.findByIdAndUpdate(
            cardId,
            { $pull: { additionalBenefits: additionalBenefitsId } },
            { new: true }
        );

        return respond(res, "Additional Benefits deleted successfully", 200, true,updatedCardDetails);
    } catch (error) {
        console.error(error);
        return respond(res, "Error deleting additional benefits", 500, false);
    }
};

export const getAllAdditionalBenefits = async (req, res) => {
    try {
    
        const benefits = await AdditionalBenefits.find();

        return respond(res, "Additional Benefits retrieved successfully", 200, true, benefits);
    } catch (error) {
        console.error(error);
        return respond(res, "Error retrieving additional benefits", 500, false);
    }
};