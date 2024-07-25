import mongoose from "mongoose";

const chargesSchema = new mongoose.Schema({
    joiningFee: {
        type: Number
    },
    annualFee: {
        type: Number
    },
    annualPercentageRate: {
        type: Number
    },
    addOnCardFee: {
        type: Number
    },
    minimumRepaymentAmount: {
        type: Number
    },
    cashWithdrawalFee: {
        type: Number
    },
    cashAdvanceLimit: {
        type: Number
    },
    cardReplacementFee: {
        type: Number
    },
    foreignTransactionFee: {
        type: Number
    },
    overLimitPenalty: {
        type: Number
    },
    fuelTransactionSurcharge: {
        type: Number
    },
    rewardPointValue: {
        type: Number
    },
    balanceBelow100: {
        type: Number
    },
    balanceFrom0to500: {
        type: Number
    },
    balanceFrom500to1000: {
        type: Number
    },
    balanceFrom1000to10000: {
        type: Number
    },
    balanceFrom501to5000: {
        type: Number
    },
    balanceFrom501to5000: {
        type: Number
    },
    balanceFrom5000to10000: {
        type: Number
    },
    balanceFrom1000to25000: {
        type: Number
    },
    balanceFrom25000to50000: {
        type: Number
    },
    balanceMoreThan50000: {
        type: Number
    },
    anyAmountDue: {
        type: String
    },
    APR: {
        type: Number
    },
    // card: [
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref: "Card"
    //     }
    // ]
})

export const Charges = mongoose.model("Charges",chargesSchema)