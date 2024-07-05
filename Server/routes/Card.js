import express from 'express'
import { createRating,getAllRating,getAverageRating } from '../controllers/RatingAndReview.js';

const router = express.Router()


//  Rating And Review Routes
router.post("/createRating",createRating);
router.post('/getAverageRating', getAverageRating);
router.get('/getAllRating',getAllRating);










export default router;