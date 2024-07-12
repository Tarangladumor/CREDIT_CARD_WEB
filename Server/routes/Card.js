import express from 'express'
import { createRating,getAllRating,getAverageRating } from '../controllers/RatingAndReview.js';
import { createComment, deleteComment, editComment, getAllComments } from '../controllers/Comment.js';
import { addAdditionalBenefits, editAdditionalBenefits,getAllAdditionalBenefits ,deleteAdditionalBenefits} from '../controllers/AdditionalBenefit.js';

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

//Additional Benfits
router.post('/add-additional-benefit', addAdditionalBenefits);
router.put('/edit-additional-benefit', editAdditionalBenefits); 
router.get('/get-all-additional-benefits',getAllAdditionalBenefits);
router.delete('/delete-additional-benefit', deleteAdditionalBenefits);










export default router;