import { Privilege } from "../models/Privilege.js";
import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"

export const addPrivilege = async (req, res) => {
  try {
    const { name } = req.body;

    const image = req.files.privilegeImage;

    if (!name) {
      return respond(res, "name is required", 400, false);
    }

    const privilegeImage = await uploadImageCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const privilegeData = await Privilege.create({
      name,
      image: privilegeImage.secure_url,
    });

    return respond(res, "privilege added successfully", 200, true, privilegeData);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while adding the privilege",
      500,
      false
    );
  }
};

export const showAllPrivilege = async (req, res) => {
  try {
    const allPrivilege = await Privilege.find({});

    return respond(
      res,
      "All privileges returned successfully",
      200,
      true,
      allPrivilege
    );
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "Something went werong while getting all privileges",
      500,
      false
    );
  }
};

export const getCardByPrivilege = async(req,res) => {
    try{
      const {privilegeId} = req.query
  
      if(!privilegeId) {
        return respond(res,"privilege id is not found",400,false)
      }
  
      const cardByPrivilege = await Privilege.findById(privilegeId).populate({
        path: "card",
        populate: [
      { path: "network" }, 
      { path: "charges" }, 
      { path: "ratingAndReviews" }
    ]
      }).exec();
  
      if(!cardByPrivilege) {
        return respond(res,"privilege is not found",400,false)
      }
  
      return respond(res,"all card fetched by privilege successfully",200,true,cardByPrivilege)
    }catch(error) {
      console.log(error)
      return respond(res,"something went wrong while geting the card by privilege",500,false)
    }
  }