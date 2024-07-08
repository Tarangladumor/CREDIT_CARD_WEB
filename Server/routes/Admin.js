import express from "express"
import { addCharges, updateCharges } from "../controllers/Charges.js"

const router = express.Router()

router.post("/charges",addCharges)
router.post("/updatecharges",updateCharges)

export default router;