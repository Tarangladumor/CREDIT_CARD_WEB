import { Card } from "../models/Card.js";
import { Network } from "../models/Network.js";
import { Provider } from "../models/Provider.js";
import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"

export const addCard = async (req, res) => {
  try {
    let {
      cardName,
      description,
      type,
      benefits,
      provider,
      network,
    } = req.body;

    const image = req.files.cardImage;

    // const type = JSON.parse(_type);
    // const benefits = JSON.parse(_benefits);

    if (
      !cardName ||
      !description ||
    //   !type.length ||
      !image ||
    //   !benefits.length ||
      !provider ||
      !network
    ) {
      return respond(res, "Allfields are required", 400, false);
    }

    const providerDetails = await Provider.findById(provider);
    if (!providerDetails) {
      return respond(res, "provider details not found", 404, false);
    }

    const networkDetails = await Network.findById(network);
    if (!networkDetails) {
      return respond(res, "network details not found", 404, false);
    }

    const cardImage = await uploadImageCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const newCard = await Card.create({
      cardName,
      description,
      type,
      network: networkDetails._id,
      benefits,
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

    const networkData = await Network.findByIdAndUpdate(
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

