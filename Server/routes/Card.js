import express from 'express'
import { createRating,getAllRating,getAverageRating } from '../controllers/RatingAndReview.js';
import { createComment, deleteComment, editComment, getAllComments } from '../controllers/Comment.js';
import { getAllCard, getOneCardDetails } from '../controllers/Card.js';
import { getCardByBank } from '../controllers/Provider.js';
import { getCardByNetwork } from '../controllers/Network.js';
import { signupNewsletter } from '../controllers/Sunscriber.js';
import { addNetwork, showAllNetwork } from "../controllers/Network.js"
import { addProvider, showAllProvider } from "../controllers/Provider.js"

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
router.get("/getCardByIncome",)
router.get("/getCardByPrivilege",)

router.post("/newsletter/subscriber",signupNewsletter)

router.post("/addNetwork",addNetwork)
router.get("/showAllNetwork",showAllNetwork)

router.post("/addProvider",addProvider)
router.get("/showAllProvider",showAllProvider)

export default router;