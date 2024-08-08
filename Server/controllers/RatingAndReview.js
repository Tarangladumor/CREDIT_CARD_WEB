import  { RatingAndReviews} from '../models/RatingAndReviews.js';
import { Card } from '../models/Card.js';
import mongoose from "mongoose";


export const createRating = async(req,res)=>{

    try{
            
        const {Author,rating,description,cardId} = req.body;
      
        console.log("cardId: ",cardId);

        if(!Author || !rating, !description || !cardId){
            return res.status(403).send({
                success:false,
                message:"Please fill all the required fields"
            })
        }

        const alreadyReviewed = await RatingAndReviews.findOne({
            Author:Author,
            card:cardId
        });

        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"Card has been already reviewed by you"
            })
        }

        const ratingReview = await RatingAndReviews.create({Author,rating,description,card:cardId});

        const updatedCardDetails = await Card.findByIdAndUpdate({_id:cardId },
            {
            $push:{
                ratingAndReviews:ratingReview._id,
            }
          },
          {new:true}
        );

        console.log("Updated Card details : ",updatedCardDetails);

        return res.status(200).json({
            success:true,
            message:"Rating and Review created Successfully",
            ratingReview,
            updatedCardDetails
        })

    }catch(error){
        console.log(error);

        return res.status(500).json({
            success:false,
            message:"Error in creating rating"
        })
    }
}

export const getAverageRating = async(req,res)=>{
    try {
   
        const cardId = req.body.cardId;

        const result = await RatingAndReviews.aggregate([
            {
                $match:{
                    card: new mongoose.Types.ObjectId(cardId),
                },
            },
            {
                $group:{
                    _id:null,
                    averageRating: { $avg: "$rating"},
                }
            }
        ])

        //return rating
        if(result.length > 0) {

            return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating,
            })

        }
        
        //if no rating/Review exist
        return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
        })
}
catch(error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
}
}

export const getAllRating = async (req, res) => {
    try{
            const allReviews = await RatingAndReviews.find({})
                                    .sort({rating: "desc"})
                                    .populate({
                                        path:"card",
                                        select: "cardName",
                                    })
                                    .exec();
            return res.status(200).json({
                success:true,
                message:"All reviews fetched successfully",
                data:allReviews,
            });
    }   
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}