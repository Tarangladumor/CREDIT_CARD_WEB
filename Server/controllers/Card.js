import { Card } from "../models/Card.js";
import { Network } from "../models/Network.js";
import { Provider } from "../models/Provider.js";
import { respond } from "../utils/response.js";
import { Charges } from "../models/Charges.js";
import { AdditionalBenefits } from "../models/AdditionalBenefits.js";
import { Comments } from "../models/Comments.js";
import { RatingAndReviews } from "../models/RatingAndReviews.js";
import { uploadImageCloudinary } from "../utils/imageUploader.js";
import { Privilege } from "../models/Privilege.js";
import { Income } from "../models/Income.js";
import mongoose from "mongoose";

// export const addCard = async (req, res) => {
//   try {
//     let {
//       cardName,
//       description,
//       type,
//       includedBnefits: _includedBnefits,
//       notIncludedBnefits: _notIncludedBnefits,
//       provider,
//       network,
//       bestFor,
//       income,applyLink
//     } = req.body;

//     const image = req.files.cardImage;

//     // const type = JSON.parse(_type);
//     const includedBnefits = JSON.parse(_includedBnefits);
//     const notIncludedBnefits = JSON.parse(_notIncludedBnefits);

//     if (
//       !cardName ||
//       !description ||
//       !type||
//       !image ||
//       !includedBnefits.length ||
//       !notIncludedBnefits.length ||
//       !provider ||
//       !network || 
//       !bestFor ||
//       !income || !applyLink
//     ) {
//       return respond(res, "Allfields are required", 400, false);
//     }

//     const networkArray = Array.isArray(network) ? network : [network];

//     const providerDetails = await Provider.findById(provider);
//     if (!providerDetails) {
//       return respond(res, "provider details not found", 404, false);
//     }

//     // const networkDetails = await Network.find({ _id: { $in: network } });
//     // if (networkDetails.length !== network.length) {
//     //   return respond(res, "some network details not found", 404, false);
//     // }

//     const networkDetails = await Network.find({ _id: { $in: networkArray } });
//     if (networkDetails.length !== networkArray.length) {
//       return respond(res, "Some network details not found", 404, false);
//     }

//     const privilegeDetails = await Privilege.findById(bestFor);
//     if (!privilegeDetails) {
//       return respond(res, "privilege details not found", 404, false);
//     }

//     const incomeDetails = await Income.findById(income);
//     if (!incomeDetails) {
//       return respond(res, "income details not found", 404, false);
//     }

//     const cardImage = await uploadImageCloudinary(
//       image,
//       process.env.FOLDER_NAME
//     );

//     const newCard = await Card.create({
//       cardName,
//       description,
//       type,
//       network: networkDetails.map((net) => net._id),
//       includedBnefits,
//       notIncludedBnefits,
//       provider: providerDetails._id,
//       image: cardImage.secure_url,
//       bestFor: privilegeDetails._id,
//       income: incomeDetails._id,
//       applyLink
//     });

//     const providerData = await Provider.findByIdAndUpdate(
//       { _id: provider },
//       {
//         $push: {
//           card: newCard._id,
//         },
//       },
//       { new: true }
//     );

//     const networkData = await Network.updateMany(
//       { _id: network },
//       {
//         $push: {
//           card: newCard._id,
//         },
//       },
//       { new: true }
//     );

//     const privilegeData = await Privilege.findByIdAndUpdate(
//       { _id: bestFor },
//       {
//         $push: {
//           card: newCard._id,
//         },
//       },
//       { new: true }
//     );

//     const incomeData = await Income.findByIdAndUpdate(
//       { _id: income },
//       {
//         $push: {
//           card: newCard._id,
//         },
//       },
//       { new: true }
//     );

//     return respond(res, "card adding successfully", 200, true, newCard);
//   } catch (error) {
//     console.log(error);
//     return respond(
//       res,
//       "something went wrong while adding the card",
//       500,
//       false
//     );
//   }
// };

// import mongoose from 'mongoose';

export const addCard = async (req, res) => {
  try {
    let {
      cardName,
      description,
      type,
      includedBnefits: _includedBnefits,
      notIncludedBnefits: _notIncludedBnefits,
      provider,
      network,
      bestFor,
      privilege,
      income,
      applyLink
    } = req.body;

    const image = req.files.cardImage;

    // Parse the benefits if passed as JSON strings
    const includedBnefits = JSON.parse(_includedBnefits);
    const notIncludedBnefits = JSON.parse(_notIncludedBnefits);

    // Validate required fields
    if (
      !cardName ||
      !description ||
      !type ||
      !image ||
      !includedBnefits.length ||
      !notIncludedBnefits.length ||
      !provider ||
      !network ||
      !bestFor ||
      !income || 
      !applyLink ||
      !privilege
    ) {
      return respond(res, "All fields are required", 400, false);
    }

    // Ensure network is parsed as an array
    const networkArray = typeof network === 'string' ? JSON.parse(network) : network;

    // Check if network array is valid and contains ObjectIds
    if (!Array.isArray(networkArray) || networkArray.length === 0) {
      return respond(res, "Invalid network selection", 400, false);
    }

    // Validate that all network entries are valid ObjectIds
    const validNetworkIds = networkArray.every((id) => mongoose.isValidObjectId(id));
    if (!validNetworkIds) {
      return respond(res, "Invalid network ID(s) provided", 400, false);
    }

    // Fetch provider details and validate
    const providerDetails = await Provider.findById(provider);
    if (!providerDetails) {
      return respond(res, "Provider details not found", 404, false);
    }

    // Fetch network details and validate
    const networkDetails = await Network.find({ _id: { $in: networkArray } });
    if (networkDetails.length !== networkArray.length) {
      return respond(res, "Some network details not found", 404, false);
    }

    // Fetch privilege and income details and validate
    const privilegeDetails = await Privilege.findById(privilege);
    if (!privilegeDetails) {
      return respond(res, "Privilege details not found", 404, false);
    }

    const incomeDetails = await Income.findById(income);
    if (!incomeDetails) {
      return respond(res, "Income details not found", 404, false);
    }

    // Upload the card image to Cloudinary
    const cardImage = await uploadImageCloudinary(image, process.env.FOLDER_NAME);

    // Create a new card entry
    const newCard = await Card.create({
      cardName,
      description,
      type,
      bestFor,
      network: networkDetails.map((net) => net._id), // Save the valid networks
      includedBnefits,
      notIncludedBnefits,
      provider: providerDetails._id,
      image: cardImage.secure_url,
      privilege: privilegeDetails._id,
      income: incomeDetails._id,
      applyLink
    });

    // Update related collections
    await Provider.findByIdAndUpdate(provider, { $push: { card: newCard._id } });
    await Network.updateMany({ _id: { $in: networkArray } }, { $push: { card: newCard._id } });
    await Privilege.findByIdAndUpdate(privilege, { $push: { card: newCard._id } });
    await Income.findByIdAndUpdate(income, { $push: { card: newCard._id } });

    // Respond with success
    return respond(res, "Card added successfully", 200, true, newCard);
  } catch (error) {
    console.log(error);
    return respond(res, "Something went wrong while adding the card", 500, false);
  }
};


export const updateCard = async (req, res) => {
  try {
    const { cardId } = req.body;
    const updates = req.body;
    const card = await Card.findById(cardId);

    if (!card) {
      return respond(res, "Card not found", 404, false);
    }

    if (req.files) {
      console.log("image update");
      const image = req.files.cardImage;
      const cardImage = await uploadImageCloudinary(
        image,
        process.env.FOLDER_NAME
      );
      card.image = cardImage.secure_url;
    }

    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        if (key === "type" || key === "benefits") {
          card[key] = JSON.parse(updates[key]);
        } else {
          card[key] = updates[key];
        }
      }
    }

    await card.save();

    const updatedCard = await Card.findOne({
      _id: cardId,
    })
      .populate("provider")
      .populate("network")
      .populate("additionalBenefits")
      .populate("charges")
      .populate("faq")
      .exec();

    return respond(res, "Card Updated Successfully", 200, true, updatedCard);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "soemthing went wrong while updating the card",
      500,
      false
    );
  }
};

export const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.body

        const card = await Card.findById(cardId)
        if(!card) {
            return respond(res,"Card not found",404,false)
        }

        const deleteOperations = [
          Charges.deleteMany({ _id: { $in: card.charges } }),
          AdditionalBenefits.deleteMany({ _id: { $in: card.additionalBenefits } }),
          Faq.deleteMany({ _id: { $in: card.faq } }),
          Comments.deleteMany({ _id: { $in: card.comments } }),
          RatingAndReviews.deleteMany({ _id: { $in: card.ratingAndReviews } })
        ];
    
        await Promise.all(deleteOperations);

        await Card.findByIdAndDelete(cardId)

    return respond(res,"card deletion done",200,true)
  }catch(error) {
    console.log(error)
    return respond(res,"something went wrong while deleting the card",500,false)
  }
}


export const getAllCard = async (req, res) => {
  try {
    const AllCard = await Card.find({}).populate("provider")
      .populate("network")
      .populate("additionalBenefits")
      .populate("charges")
      .populate("faq")
      .populate("rewards")
      .populate("howToApply")
      .populate("eligibility")
      .populate("ratingAndReviews")
      .exec();

    return respond(res, "all card fetched successfully", 200, true, AllCard)
  } catch (error) {
    console.log(error)
    return respond(res, "soemthing went wrong while getting all the card", 500, false)
  }
}

export const getCardByIncome = async (req, res) => {
  try {
    return respond(res, "all card fetched successfully by income", 200, true)
  } catch (error) {
    console.log(error)
    return respond(res, "soemthing went wrong while getting all the card by income", 500, false)
  }
}

export const getCardByPrivilege = async (req, res) => {
  try {
    return respond(res, "all card fetched successfully by privilege", 200, true)
  } catch (error) {
    console.log(error)
    return respond(res, "soemthing went wrong while getting all the card by privilege", 500, false)
  }
}

export const getOneCardDetails = async (req, res) => {
  try {
    const { cardId } = req.query;

    // console.log(req.query);

    if (!cardId) {
      return respond(res, "Card ID is not found", 400, false);
    }

    const cardData = await Card.findById(cardId)
      .populate("provider")
      .populate("network")
      .populate("charges")
      .populate("faq")
      .populate("rewards")
      .populate("eligibility")
      .populate("howToApply")
      .populate("additionalBenefits")
      .populate("comments")
      .populate("ratingAndReviews")
      .populate("privilege")
      .exec();

      console.log("cardData",cardData)

      const privilegeIds = cardData.privilege.card.filter(id => id.toString() !== cardId);

      const similarCards = await Card.find({
        _id: { $in: privilegeIds }
      }).limit(2)
      .populate("provider")
      .populate("network")
      .populate("charges")
      .populate("faq")
      .populate("rewards")
      .populate("eligibility")
      .populate("howToApply")
      .populate("additionalBenefits")
      .populate("comments")
      .populate("ratingAndReviews")
      .populate("privilege")
      .exec();
  
      // console.log("Similar Cards:", similarCards);
      
    return respond(res, "Card details fetched successfully", 200, true,{cardData,similarCards});
    
  } catch (error) {
    console.log(error);
    return respond(res, "Something went wrong while getting card details", 500, false);
  }
};



