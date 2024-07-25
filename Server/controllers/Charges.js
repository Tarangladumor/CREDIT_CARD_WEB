import {Charges} from "../models/Charges.js"
import { Card } from "../models/Card.js"
import { respond } from "../utils/response.js"

export const addCharges = async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const {
            joiningFee, annualFee, annualPercentageRate, addOnCardFee,
            minimumRepaymentAmount, cashWithdrawalFee, cashAdvanceLimit,
            cardReplacementFee, foreignTransactionFee, overLimitPenalty,
            fuelTransactionSurcharge, rewardPointValue, balanceBelow100,
            balanceBelow500, balanceFrom0to500,balanceFrom100to500, balanceFrom501to5000,
            balanceFrom500to1000, balanceFrom1000to10000, balanceFrom5001to10000,
            balanceFrom5000to10000, balanceFrom10000to25000, balanceFrom10001to25000,
            balanceFrom25000to50000, balanceFrom25001to50000, balanceMoreThan50000,
            balanceMoreThan10000, anyAmountDue, cardId
        } = req.body;

        const requiredFields = [
            'joiningFee', 'annualFee', 'annualPercentageRate', 'addOnCardFee',
            'minimumRepaymentAmount', 'cashWithdrawalFee', 'cashAdvanceLimit',
            'cardReplacementFee', 'foreignTransactionFee', 'overLimitPenalty',
            'fuelTransactionSurcharge', 'rewardPointValue', 'cardId'
        ];

        for (let field of requiredFields) {
            if (!req.body[field]) {
                return respond(res, `${field} is required`, 500, false);
            }
        }

        const newCharge = await Charges.create({
            joiningFee, annualFee, annualPercentageRate, addOnCardFee,
            minimumRepaymentAmount, cashWithdrawalFee, cashAdvanceLimit,
            cardReplacementFee, foreignTransactionFee, overLimitPenalty,
            fuelTransactionSurcharge, rewardPointValue, balanceBelow100,
            balanceBelow500, balanceFrom0to500,balanceFrom100to500, balanceFrom501to5000,
            balanceFrom500to1000, balanceFrom1000to10000, balanceFrom5001to10000,
            balanceFrom5000to10000, balanceFrom10000to25000, balanceFrom10001to25000,
            balanceFrom25000to50000, balanceFrom25001to50000, balanceMoreThan50000,
            balanceMoreThan10000, anyAmountDue, cardId
        });

        const updatedCardDetails = await Card.findByIdAndUpdate(
            cardId,
            {
                $push: { charges: newCharge._id }
            },
            { new: true }
        ).populate("charges")
        .exec();

        return respond(res, "Charges added successfully", 200, true, updatedCardDetails);

    } catch (error) {
        console.error(error);
        return respond(res, "Something went wrong while adding the charges", 500, false);
    }
};

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
