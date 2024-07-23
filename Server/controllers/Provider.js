import { Provider } from "../models/Provider.js";
import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"

export const addProvider = async (req, res) => {
  try {
    const { name } = req.body;

    const image = req.files.providerImage;

    if (!name) {
      return respond(res, "name is required", 400, false);
    }

    const providerImage = await uploadImageCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const providerData = await Provider.create({
      name,
      image: providerImage.secure_url,
    });

    return respond(res, "provider added successfully", 200, true, providerData);
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

export const showAllProvider = async (req, res) => {
  try {
    const allProviders = await Provider.find({});

    return respond(
      res,
      "All providers returned successfully",
      200,
      true,
      allProviders
    );
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "Something went werong while getting all providers",
      500,
      false
    );
  }
};

export const getCardByBank = async(req,res) => {
  try{
    const {providerId} = req.body

    if(!providerId) {
      return respond(res,"provider id is not found",400,false)
    }

    const cardByBank = await Provider.findById(providerId).populate("card")

    if(!cardByBank) {
      return respond(res,"provider is not found",400,false)
    }

    return respond(res,"all card fetched by bank successfully",200,true,cardByBank)
  }catch(error) {
    console.log(error)
    return respond(res,"something went wrong while geting the card by bank",500,false)
  }
}
