import {Comments}  from "../models/Comments.js";
import {Replies} from "../models/reply.js"

export const addReplyToComment = async (req, res) => {
    try {
        const { Author, description, commentId } = req.body;

        // Create a new reply with the correct schema field names
        const reply = new Replies({
            Author,
            description,
            comment: commentId  // This links the reply to the comment's ObjectId
        });

        // Save the reply in the database
        const savedReply = await reply.save();

        // Push the reply's ObjectId to the corresponding comment's replies array
        await Comments.findByIdAndUpdate(commentId, {
            $push: { replies: savedReply._id },
        });

        // Return the saved reply
        res.status(201).json({
            success:true,
            data:savedReply
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to add reply", error });
    }
};


export const getRepliesForComment = async (req, res) => {
    try {
        const { commentId } = req.body;

        const replies = await Replies.find({ comment: commentId });

        res.status(200).json(replies);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch replies", error });
    }
};

// Update a specific reply
export const updateReply = async (req, res) => {
    try {
        const { description,replyId } = req.body;

        // Find the reply by ID and update it
        const updatedReply = await Replies.findByIdAndUpdate(
            replyId,
            { description },
            { new: true } // return the updated reply
        );

        if (!updatedReply) {
            return res.status(404).json({ message: "Reply not found" });
        }

        res.status(200).json(updatedReply);
    } catch (error) {
        res.status(500).json({ message: "Failed to update reply", error });
    }
};

// Delete a specific reply
export const deleteReply = async (req, res) => {
    try {
        const { replyId } = req.body;

        // Find the reply by ID
        const reply = await Replies.findById(replyId);

        if (!reply) {
            return res.status(404).json({ message: "Reply not found" });
        }

        // Remove the reply reference from the associated comment
        await Comments.findByIdAndUpdate(reply.comment, {
            $pull: { replies: replyId },
        });

        // Delete the reply
        await reply.remove();

        res.status(200).json({ message: "Reply deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete reply", error });
    }
};
