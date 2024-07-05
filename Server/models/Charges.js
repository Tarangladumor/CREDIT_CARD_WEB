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
    balanceFrom100to500: {
        type: Number
    },
    balanceFrom501to5000: {
        type: Number
    },
    balanceFrom5001to10000: {
        type: Number
    },
    balanceFrom10001to25000: {
        type: Number
    },
    balanceFrom25001to50000: {
        type: Number
    },
    balanceMoreThan50000: {
        type: Number
    }
})

export const Charges = mongoose.model("Charges",chargesSchema)