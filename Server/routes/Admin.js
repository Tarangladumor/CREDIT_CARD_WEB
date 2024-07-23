import express from "express"
import { addCharges, updateCharges } from "../controllers/Charges.js"
import { addProvider, showAllProvider } from "../controllers/Provider.js"
import { addNetwork, showAllNetwork } from "../controllers/Network.js"
import { addCard, deleteCard,updateCard } from "../controllers/Card.js"
import { addAdditionalBenefits, editAdditionalBenefits,getAllAdditionalBenefits ,deleteAdditionalBenefits} from '../controllers/AdditionalBenefit.js';
import { createFaq, deleteFaq, updateFaq } from "../controllers/Faq.js"

const router = express.Router()

router.post("/addCharges",addCharges)
router.post("/updateCharges",updateCharges)

router.post("/addProvider",addProvider)
router.get("/showAllProvider",showAllProvider)

router.post("/addNetwork",addNetwork)
router.get("/showAllNetwork",showAllNetwork)

router.post("/addFaq",createFaq)
router.put("/editFaq",updateFaq)
router.delete("/deleteFaq",deleteFaq)

router.post('/add-additional-benefit', addAdditionalBenefits);
router.put('/edit-additional-benefit', editAdditionalBenefits); 
router.get('/get-all-additional-benefits',getAllAdditionalBenefits);
router.delete('/delete-additional-benefit', deleteAdditionalBenefits);

router.post("/addCard",addCard)
router.put("/editCard",updateCard)
router.delete("/deleteCard",deleteCard)



export default router;