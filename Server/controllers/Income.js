import { respond } from "../utils/response.js";
import {uploadImageCloudinary} from "../utils/imageUploader.js"
import { Income } from "../models/Income.js";
import { Card } from "../models/Card.js";

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
      const { income } = req.query; // Get the income value from the query parameter
  
    if (!income) {
      return respond(res, "Please provide a valid 'income' value", 400, false);
    }
  
    let query;
    const incomeValue = parseInt(income, 10);
  
    if (incomeValue <= 25000) {
      query = { income: { $lte: 25000 } };
    } else if (incomeValue > 25000 && incomeValue <= 50000) {
      query = { income: { $gt: 25000, $lte: 50000 } };
    } else if (incomeValue > 50000 && incomeValue <= 100000) {
      query = { income: { $gt: 50000, $lte: 100000 } };
    } else if (incomeValue > 100000 && incomeValue <= 150000) {
      query = { income: { $gt: 100000, $lte: 150000 } };
    } else {
      query = { income: { $gt: 150000 } };
    }
  
      const cards = await Card.find(query);
  
      if (!cards.length) {
        return respond(res, "No cards found for the given income range", 404, false);
      }
  
      return respond(res,"all card fetched successfully by income",200,true,cards)
    }catch(error) {
      console.log(error) 
      return respond(res,"soemthing went wrong while getting all the card by income",500,false)
    }
  }