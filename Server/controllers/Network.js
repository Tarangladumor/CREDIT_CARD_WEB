import { Network } from "../models/Network.js";
import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"
import { Card } from "../models/Card.js";

export const addNetwork = async (req, res) => {
  try {
    const { name } = req.body;

    const image = req.files.networkImage;

    if (!name) {
      return respond(res, "name is required", 400, false);
    }

    const networkImage = await uploadImageCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const networkData = await Network.create({
      name,
      image: networkImage.secure_url,
    });

    return respond(res, "provider added successfully", 200, true, networkData);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while adding the provider",
      500,
      false
    );
  }
};

export const showAllNetwork = async (req, res) => {
  try {
    const allNetworks = await Network.find({});

    return respond(
      res,
      "All networks returned successfully",
      200,
      true,
      allNetworks
    );
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "Something went werong while getting all networks",
      500,
      false
    );
  }
};

// export const getCardByNetwork = async(req,res) => {
//   try{
//     const { networkId } = req.query;

//     console.log(req.query);

//     if(!networkId) {
//       return respond(res,"network id is not found",400,false)
//     }

//     const cardByNetwork = await Network.findById(networkId).populate({
//       path: "card",
//       populate: [
//       { path: "network" }, 
//       { path: "charges" }, 
//       { path: "ratingAndReviews" }
//     ]
//     }).exec();

//     if(!cardByNetwork) {
//       return respond(res,"Network is not found",400,false)
//     }

//     return respond(res,"all card fetched by network successfully",200,true,cardByNetwork)
//   }catch(error) {
//     console.log(error)
//     return respond(res,"something went wrong while geting the card by network",500,false)
//   }
// }

export const getCardByNetwork = async (req, res) => {
  try {
    const { networkId } = req.query;

    if (!networkId) {
      return respond(res, "Network ID is not found", 400, false);
    }

    const cardByNetwork = await Network.findById(networkId).populate({
      path: "card",
      populate: [
        { path: "network" },
        { path: "charges" },
        { path: "ratingAndReviews" }
      ]
    }).exec();

    if (!cardByNetwork) {
      return respond(res, "Network not found", 400, false);
    }

    // Fetch random cards related to the specific network
    const randomCards = await Card.aggregate([
      { $match: { _id: { $in: cardByNetwork.card.map(c => c._id) } } },
      { $sample: { size: 100 } } // Adjust size as needed, or leave out for full randomization
    ]).exec();

    return respond(res, "Cards fetched by network successfully", 200, true, randomCards);
  } catch (error) {
    console.log(error);
    return respond(res, "Something went wrong while getting cards by network", 500, false);
  }
};
