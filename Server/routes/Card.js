import express from 'express'
import { createRating,getAllRating,getAverageRating } from '../controllers/RatingAndReview.js';
import { createComment, deleteComment, editComment, getAllComments } from '../controllers/Comment.js';
import { getAllCard,getOneCardDetails } from '../controllers/Card.js';
import { addProvider, getCardByBank, showAllProvider } from '../controllers/Provider.js';
import { getCardByNetwork } from '../controllers/Network.js';
import { signupNewsletter } from '../controllers/Sunscriber.js';
import {showAllNetwork } from "../controllers/Network.js"
import { getCardByIncome, showAllIncome } from '../controllers/Income.js';
import { getCardByPrivilege, showAllPrivilege } from '../controllers/Privilege.js';

import { compareCards } from "../controllers/Comparison.js"

const router = express.Router()

//  Rating And Review Routes
router.post("/create-rating",createRating);
router.post('/get-average-rating', getAverageRating);
router.get('/get-all-rating',getAllRating);

//comments
router.post("/create-comment",createComment);
router.put("/edit-comment",editComment);
router.delete("/delete-comment",deleteComment);
router.get('/comments', getAllComments);

router.get("/getAllCard",getAllCard)
router.get("/getCardByBank",getCardByBank)
router.get("/getCardByNetwork",getCardByNetwork)
router.get("/getOneCardDetail",getOneCardDetails)
router.get("/getCardByIncome",getCardByIncome)
router.get("/getCardByPrivilege",getCardByPrivilege)

router.post("/newsletter/subscriber",signupNewsletter)


router.get("/showAllProvider",showAllProvider)
router.get("/showAllNetwork",showAllNetwork)
router.get("/showAllIncome",showAllIncome)
router.get("/showAllPrivilege",showAllPrivilege)

router.get('/compare/:cardId1/:cardId2', compareCards);


router.post("/addProvider",addProvider)
router.get("/showAllProvider",showAllProvider)

export default router;