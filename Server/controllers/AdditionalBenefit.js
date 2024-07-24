import {AdditionalBenefits} from "../models/AdditionalBenefits.js";
import { Card } from '../models/Card.js';
import { respond } from '../utils/response.js'; 



export const addAdditionalBenefits = async (req, res) => {
    try {
        const {
            welcomeBonus,
            emiBenefit,
            fuelSurcharge,
            rewardPoints,
            loungeAccess,
            zeroLostCardLiability,
            milestoneBenefit,
            otherBenefit,
            travelBenefit,
            diningBenefit,
            conciergeServices,
            shoppingBenefit,
            cardId
        } = req.body;

        // Validate cardId
        if (!cardId) {
            return respond(res, "Card ID is required", 400, false);
        }

        // Check if the card exists
        const validCard = await Card.findOne({ _id: cardId });
        if (!validCard) {
            return respond(res, "Card not found", 403, false);
        }

        // Create new AdditionalBenefits document
        const additionalBenefits = await AdditionalBenefits.create({
            welcomeBonus: Array.isArray(welcomeBonus) ? welcomeBonus : [],
            emiBenefit: Array.isArray(emiBenefit) ? emiBenefit : [],
            fuelSurcharge: Array.isArray(fuelSurcharge) ? fuelSurcharge : [],
            rewardPoints: Array.isArray(rewardPoints) ? rewardPoints : [],
            loungeAccess: Array.isArray(loungeAccess) ? loungeAccess : [],
            zeroLostCardLiability: Array.isArray(zeroLostCardLiability) ? zeroLostCardLiability : [],
            milestoneBenefit: Array.isArray(milestoneBenefit) ? milestoneBenefit : [],
            otherBenefit: Array.isArray(otherBenefit) ? otherBenefit : [],
            travelBenefit: Array.isArray(travelBenefit) ? travelBenefit : [],
            diningBenefit: Array.isArray(diningBenefit) ? diningBenefit : [],
            conciergeServices: Array.isArray(conciergeServices) ? conciergeServices : [],
            shoppingBenefit: Array.isArray(shoppingBenefit) ? shoppingBenefit : []
        });

        // Update the card with the new additionalBenefits
        const updatedCardDetails = await Card.findByIdAndUpdate(
            cardId,
            {
                $push: { additionalBenefits: additionalBenefits._id }
            },
            { new: true }
        );

        console.log("Updated Card details", updatedCardDetails);

        return respond(res, "Additional benefits successfully added", 200, true, additionalBenefits);
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