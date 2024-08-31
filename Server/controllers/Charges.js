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
            fuelTransactionSurcharge, rewardPointValue, cardId
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

        const points = [];
        if (req.body["points[0][key]"]) {
            let i = 0;
            while (req.body[`points[${i}][key]`]) {
                points.push({
                    key: req.body[`points[${i}][key]`],
                    value: req.body[`points[${i}][value]`],
                });
                i++;
            }
        }

        const newCharge = await Charges.create({
            joiningFee, annualFee, annualPercentageRate, addOnCardFee,
            minimumRepaymentAmount, cashWithdrawalFee, cashAdvanceLimit,
            cardReplacementFee, foreignTransactionFee, overLimitPenalty,
            fuelTransactionSurcharge, rewardPointValue, cardId,points
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
