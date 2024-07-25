import { Privilege } from "../models/Privilege.js";
import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"
import { Card } from "../models/Card.js";

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
      const { bestFor } = req.query; 
  
    if (!bestFor) {
      return respond(res, "Please provide a valid 'bestFor' value", 400, false);
    }
  
     const cards = await Card.find({ bestFor }); 
  
      if (!cards.length) {
        return respond(res, "No cards found for the given privilege", 404, false);
      }
  
      return respond(res,"all card fetched successfully by privilege",200,true,cards)
    }catch(error) {
      console.log(error) 
      return respond(res,"soemthing went wrong while getting all the card by privilege",500,false)
    }
  }