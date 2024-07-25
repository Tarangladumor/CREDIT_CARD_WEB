import { Card } from "../models/Card.js";
import { Network } from "../models/Network.js";
import { Provider } from "../models/Provider.js";
import { respond } from "../utils/response.js";
import { Charges } from "../models/Charges.js";
import { AdditionalBenefits } from "../models/AdditionalBenefits.js";
import { Comments } from "../models/Comments.js";
import { RatingAndReviews } from "../models/RatingAndReviews.js";
import { uploadImageCloudinary } from "../utils/imageUploader.js";

export const addCard = async (req, res) => {
  try {
    let {
      cardName,
      description,
      type: _type,
      includedBnefits: _includedBnefits,
      notIncludedBnefits: _notIncludedBnefits,
      provider,
      network,
    } = req.body;

    const image = req.files.cardImage;

    const type = JSON.parse(_type);
    const includedBnefits = JSON.parse(_includedBnefits);
    const notIncludedBnefits = JSON.parse(_notIncludedBnefits);

    if (
      !cardName ||
      !description ||
      !type.length ||
      !image ||
      !includedBnefits.length ||
      !notIncludedBnefits.length ||
      !provider ||
      !network
    ) {
      return respond(res, "Allfields are required", 400, false);
    }

    const providerDetails = await Provider.findById(provider);
    if (!providerDetails) {
      return respond(res, "provider details not found", 404, false);
    }

    const networkDetails = await Network.find({ _id: { $in: network } });
    if (networkDetails.length !== network.length) {
      return respond(res, "some network details not found", 404, false);
    }

    const cardImage = await uploadImageCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const newCard = await Card.create({
      cardName,
      description,
      type,
      network: networkDetails.map((net) => net._id),
      includedBnefits,
      notIncludedBnefits,
      provider: providerDetails._id,
      image: cardImage.secure_url,
    });

    const providerData = await Provider.findByIdAndUpdate(
      { _id: provider },
      {
        $push: {
          card: newCard._id,
        },
      },
      { new: true }
    );

    const networkData = await Network.updateMany(
      { _id: network },
      {
        $push: {
          card: newCard._id,
        },
      },
      { new: true }
    );

    return respond(res, "card adding successfully", 200, true, newCard);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while adding the card",
      500,
      false
    );
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

    console.log(req.query);

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
      .populate("bestFor")
      .exec();

    return respond(res, "Card details fetched successfully", 200, true, cardData);
  } catch (error) {
    console.log(error);
    return respond(res, "Something went wrong while getting card details", 500, false);
  }
};



