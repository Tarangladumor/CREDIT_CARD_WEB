import express from "express"
import { addCharges, updateCharges } from "../controllers/Charges.js"
import { addProvider, showAllProvider } from "../controllers/Provider.js"
import { addNetwork, showAllNetwork } from "../controllers/Network.js"
import { addCard } from "../controllers/Card.js"

const router = express.Router()

router.post("/addCharges",addCharges)
router.post("/updateCharges",updateCharges)

router.post("/addProvider",addProvider)
router.get("/showAllProvider",showAllProvider)

router.post("/addNetwork",addNetwork)
router.get("/showAllNetwork",showAllNetwork)

router.post("/addCard",addCard)

export default router;