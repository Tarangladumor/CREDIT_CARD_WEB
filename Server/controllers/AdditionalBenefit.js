import {AdditionalBenefits} from "../models/AdditionalBenefits.js";
import { Card } from '../models/Card.js';
import { respond } from '../utils/response.js'; 

// export const addAdditionalBenefits = async (req, res) => {
//   console.log("benefits", req.body);
//   const { cardId, ...rawBenefits } = req.body;

//   // Helper function to transform raw data into structured data
//   const transformBenefits = (rawData) => {
//     const benefitKeys = [
//       'welcomeBonus', 'emiBenefit', 'fuelSurcharge', 'rewardPoints', 'loungeAccess', 
//       'zeroLostCardLiablity', 'milestoneBenefit', 'otherBenefit', 'travelBenefit', 
//       'diningBenefit', 'conciergeServices', 'shoppingBenefit', 'entertainmentBenefit', 
//       'insuranceBenefit','cashbackBenefit','revolvingCredit','interestfreePeriod'
//     ];
    
//     const benefits = {};

//     benefitKeys.forEach(key => {
//       benefits[key] = [];
//     });

//     // Iterate over rawData to structure it correctly
//     Object.keys(rawData).forEach(key => {
//       const match = key.match(/(\w+)\[(\d+)]\[(\w+)]/);
//       if (match) {
//         const [_, benefitName, index, field] = match;
//         if (benefitKeys.includes(benefitName)) {
//           if (!benefits[benefitName][index]) benefits[benefitName][index] = {};
//           benefits[benefitName][index][field] = rawData[key];
//         }
//       }
//     });

//     return benefits;
//   };

//   try {
//     const benefits = transformBenefits(rawBenefits);

//     let additionalBenefits = await AdditionalBenefits.findOne({ cardId });

//     if (additionalBenefits) {
//       // Update the existing record
//       additionalBenefits = await AdditionalBenefits.findOneAndUpdate(
//         { cardId },
//         { $set: benefits },
//         { new: true }
//       );
//     } else {
//       // Create a new record
//       additionalBenefits = new AdditionalBenefits({
//         cardId,
//         ...benefits,
//       });
//       await additionalBenefits.save();
//     }

//     const updatedCard = await Card.findByIdAndUpdate(
//       cardId,
//       { $push: { additionalBenefits: additionalBenefits._id } },
//       { new: true }
//   ).populate("additionalBenefits");

//     res.status(200).json({ success: true, data: updatedCard });
//   } catch (error) {
//     console.error('Error saving benefits:', error.message);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

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

export const addAdditionalBenefits = async (req, res) => {
  console.log("Request Body:", req.body);

  const { cardId, ...rawBenefits } = req.body;

  const transformBenefits = (rawData) => {
    const benefitKeys = [
      'welcomeBonus', 'emiBenefit', 'fuelSurcharge', 'rewardPoints', 'loungeAccess', 
      'zeroLostCardLiability', 'milestoneBenefit', 'otherBenefit', 'travelBenefit', 
      'diningBenefit', 'conciergeServices', 'shoppingBenefit', 'entertainmentBenefit', 
      'insuranceBenefit', 'cashbackBenefit', 'revolvingCredit', 'interestfreePeriod'
    ];

    const benefits = {};

    // Initialize benefits
    benefitKeys.forEach(key => {
      benefits[key] = [];
    });

    // Iterate and structure
    Object.keys(rawData).forEach(key => {
      const match = key.match(/(\w+)\[(\d+)]\[(\w+)]/);
      if (match) {
        const [_, benefitName, index, field] = match;
        if (benefitKeys.includes(benefitName)) {
          if (!benefits[benefitName][index]) benefits[benefitName][index] = {};
          benefits[benefitName][index][field] = rawData[key];
        }
      }
    });

    return benefits;
  };

  try {
    const benefits = transformBenefits(rawBenefits);
    console.log("Transformed Benefits:", benefits);

    let additionalBenefits = await AdditionalBenefits.findOne({ cardId });

    if (additionalBenefits) {
      additionalBenefits = await AdditionalBenefits.findOneAndUpdate(
        { cardId },
        { $set: benefits },
        { new: true }
      );
    } else {
      additionalBenefits = new AdditionalBenefits({
        cardId,
        ...benefits,
      });
      await additionalBenefits.save();
    }

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { $push: { additionalBenefits: additionalBenefits._id } },
      { new: true }
    ).populate("additionalBenefits");

    res.status(200).json({ success: true, data: updatedCard });
  } catch (error) {
    console.error('Error saving benefits:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
