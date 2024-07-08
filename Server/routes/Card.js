import express from 'express'
import { createRating,getAllRating,getAverageRating } from '../controllers/RatingAndReview.js';
import { createComment, deleteComment, editComment, getAllComments } from '../controllers/Comment.js';

const router = express.Router()

//charges


//  Rating And Review Routes
router.post("/create-rating",createRating);
router.post('/get-average-rating', getAverageRating);
router.get('/get-all-rating',getAllRating);

//comments
router.post("/create-comment",createComment);
router.put("/edit-comment",editComment);
router.delete("/delete-comment",deleteComment);
router.get('/comments', getAllComments);


export default router;