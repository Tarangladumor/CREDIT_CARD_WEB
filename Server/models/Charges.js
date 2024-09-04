import mongoose from "mongoose";

const chargesSchema = new mongoose.Schema({

  joiningFee: { type: String, required: true },
  annualFee: { type: String, required: true },
  annualPercentageRate: { type: String, required: true },
  addOnCardFee: { type: String, required: true },
  minimumRepaymentAmount: { type: String, required: true },
  cashWithdrawalFee: { type: String, required: true },
  cashAdvanceLimit: { type: String, required: true },
  cardReplacementFee: { type: String, required: true },
  foreignTransactionFee: { type: String, required: true },
  overLimitPenalty: { type: String, required: true },
  fuelTransactionSurcharge: { type: String, required: true },
  rewardPointValue: { type: String, required: true },
  // balanceBelow100: { type: Number },
  // balanceBelow500: { type: Number },
  // balanceFrom0to500: { type: Number },
  // balanceFrom100to500: { type: Number },
  // balanceFrom501to5000: { type: Number },
  // balanceFrom500to1000: { type: Number },
  // balanceFrom1000to10000: { type: Number },
  // balanceFrom5001to10000: { type: Number },
  // balanceFrom5000to10000: { type: Number },
  // balanceFrom10000to25000: { type: Number },
  // balanceFrom10001to25000: { type: Number },
  // balanceFrom25000to50000: { type: Number },
  // balanceFrom25001to50000: { type: Number },
  // balanceMoreThan50000: { type: Number },
  // balanceMoreThan10000: { type: Number },
  // anyAmountDue: { type: String },
  points: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId(),
            },
            key: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        }
    ],
  cardId: { type: mongoose.Schema.Types.ObjectId, ref: "Card", required: true },
});

export const Charges = mongoose.model("Charges", chargesSchema);
