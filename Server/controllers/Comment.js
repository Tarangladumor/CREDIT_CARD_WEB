import { Comments } from "../models/Comments.js";
import { Card } from "../models/Card.js";

export const createComment = async(req,res)=>{

    try{
        
        const {Author, description, cardId} = req.body;
         
        if(!Author || !description || !cardId){
            return res.status(403).send({
                success:false,
                message:"All fields are required."
            });
        }

        const comment = await Comments.create({
            Author,description, card:cardId
        });

        const updatedCardDetails = await Card.findByIdAndUpdate({_id:cardId },
            {
            $push:{
                comments:comment._id,
            }
          },
          {new:true}
        );

        // console.log("Updated Card details ",updatedCardDetails);

        return res.status(200).json({
            success:true,
            message:"Comment is created Successfully",
            comment,
            updatedCardDetails
        })

    }catch(error){
        console.log(error);

        return res.status(500).json({
            success:false,
            message:"Error in creating comments"
        })

    }

}


export const editComment = async (req, res) => {
    try {
        const { commentId, description } = req.body;  

        if (!commentId || !description) {
            return res.status(400).json({
                success: false,
                message: "Comment ID and new description are required",
            });
        }

       
        const comment = await Comments.findById(commentId);

       
        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found",
            });
        }

        comment.description = description;

        const updatedComment = await comment.save();

        return res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            updatedComment,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error updating comment",
        });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.body;

        if (!commentId) {
            return res.status(400).json({
                success: false,
                message: "Comment ID is required",
            });
        }

        await Comments.findByIdAndDelete(commentId);
   
        const updatedCard = await Card.findOneAndUpdate(
            { comments: commentId },
            { $pull: { comments: commentId } },
            { new: true }
        );

        if (!updatedCard) {
            return res.status(404).json({
                success: false,
                message: "Card not found or no card associated with this comment",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Comment deleted successfully",
            updatedCard,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error deleting comment",
        });
    }
};

export const getAllComments = async (req, res) => {
    try {
       
        const comments = await Comments.find().populate('card');

        
        return res.status(200).json({
            success: true,
            message: "Comments retrieved successfully",
            comments,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error retrieving comments",
        });
    }
};