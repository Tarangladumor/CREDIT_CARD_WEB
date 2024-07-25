import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"
import { Income } from "../models/Income.js";

export const addIncome = async (req, res) => {
  try {
    const { name } = req.body;

    const image = req.files.incomeImage;

    if (!name) {
      return respond(res, "name is required", 400, false);
    }

    const incomeImage = await uploadImageCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    const incomeData = await Income.create({
      name,
      image: incomeImage.secure_url,
    });

    return respond(res, "Income added successfully", 200, true, incomeData);
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "something went wrong while adding the Income",
      500,
      false
    );
  }
};

export const showAllIncome = async (req, res) => {
  try {
    const allIncome = await Income.find({});

    return respond(
      res,
      "All Income returned successfully",
      200,
      true,
      allIncome
    );
  } catch (error) {
    console.log(error);
    return respond(
      res,
      "Something went werong while getting all Income",
      500,
      false
    );
  }
};

export const getCardByIncome = async(req,res) => {
    try{
      const {incomeId} = req.query
  
      if(!incomeId) {
        return respond(res,"income id is not found",400,false)
      }
  
      const cardByIncome = await Income.findById(incomeId).populate({
        path: "card",
        populate: "network",
        populate: "charges"
      }).exec();
  
      if(!cardByIncome) {
        return respond(res,"privilege is not found",400,false)
      }
  
      return respond(res,"all card fetched by Income successfully",200,true,cardByIncome)
    }catch(error) {
      console.log(error)
      return respond(res,"something went wrong while geting the card by Income",500,false)
    }
  }