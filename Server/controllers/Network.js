import { Network } from "../models/Network.js";
import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"

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
