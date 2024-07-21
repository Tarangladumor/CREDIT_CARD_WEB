import {Charges} from "../models/Charges.js"
import { Card } from "../models/Card.js"
import { respond } from "../utils/response.js"

export const addCharges = async(req,res) => {
    try{

        const {joiningFee,annualFee,annualPercentageRate,addOnCardFee,minimumRepaymentAmount,cashWithdrawalFee,cashAdvanceLimit,cardReplacementFee,foreignTransactionFee,overLimitPenalty,fuelTransactionSurcharge, rewardPointValue,cardId} = req.body

        if(!joiningFee||!annualFee||!annualPercentageRate||!addOnCardFee||!minimumRepaymentAmount||!cashWithdrawalFee||!cashAdvanceLimit||!cardReplacementFee||!foreignTransactionFee||!overLimitPenalty||!fuelTransactionSurcharge||! rewardPointValue || !cardId) {
            return respond(res,"all fields are required",500,false)
        }

        const newCharge = await Charges.create({
            joiningFee,annualFee,annualPercentageRate,addOnCardFee,minimumRepaymentAmount,cashWithdrawalFee,cashAdvanceLimit,cardReplacementFee,foreignTransactionFee,overLimitPenalty,fuelTransactionSurcharge, rewardPointValue
        })

        const updatedCardDetails = await Card.findByIdAndUpdate(
            cardId,
            {
                $push:{
                    charges:newCharge._id,
                }
            },
            {new:true}
        ).populate("charges")
        .exec();

        return respond(res,"charges done",200,true,updatedCardDetails)

    } catch(error) {
        console.log(error) 
        return respond(res,"something went wrong while adding the charges",500,false)
    }
}

export const updateCharges = async(req,res) => {
    try{
        const {joiningFee,annualFee,annualPercentageRate,addOnCardFee,minimumRepaymentAmount,cashWithdrawalFee,cashAdvanceLimit,cardReplacementFee,foreignTransactionFee,overLimitPenalty,fuelTransactionSurcharge, rewardPointValue,cardId,chargesId} = req.body

        if(!joiningFee||!annualFee||!annualPercentageRate||!addOnCardFee||!minimumRepaymentAmount||!cashWithdrawalFee||!cashAdvanceLimit||!cardReplacementFee||!foreignTransactionFee||!overLimitPenalty||!fuelTransactionSurcharge||! rewardPointValue || !cardId || !chargesId) {
            return respond(res,"all fields are required",500,false)
        }

        // const creditCard = await Card.findOne({cardId})

        // if(!creditCard) {
        //     return respond(res,"card is not found",404,false)
        // }

        const updatedCharge = await Charges.findByIdAndUpdate(chargesId, {joiningFee,annualFee,annualPercentageRate,addOnCardFee,minimumRepaymentAmount,cashWithdrawalFee,cashAdvanceLimit,cardReplacementFee,foreignTransactionFee,overLimitPenalty,fuelTransactionSurcharge, rewardPointValue},{new:true});

        // const card = await Card.findById(cardId).populate(
        //     "charges"
        // ).exec()

        return respond(res,"charges updated successfully",200,true,updatedCharge)

    }catch(error) {
        console.log(error.message) 
        return respond(res,"something went wrong while updating the chegaes",500,false)
    }
}
