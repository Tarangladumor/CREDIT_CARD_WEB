import mongoose from "mongoose";

const chargesSchema = new mongoose.Schema({

  joiningFee: { type: Number, required: true },
  annualFee: { type: Number, required: true },
  annualPercentageRate: { type: Number, required: true },
  addOnCardFee: { type: Number, required: true },
  minimumRepaymentAmount: { type: Number, required: true },
  cashWithdrawalFee: { type: Number, required: true },
  cashAdvanceLimit: { type: Number, required: true },
  cardReplacementFee: { type: Number, required: true },
  foreignTransactionFee: { type: Number, required: true },
  overLimitPenalty: { type: Number, required: true },
  fuelTransactionSurcharge: { type: Number, required: true },
  rewardPointValue: { type: Number, required: true },
  balanceBelow100: { type: Number },
  balanceBelow500: { type: Number },
  balanceFrom0to500: { type: Number },
  balanceFrom100to500: { type: Number },
  balanceFrom501to5000: { type: Number },
  balanceFrom500to1000: { type: Number },
  balanceFrom1000to10000: { type: Number },
  balanceFrom5001to10000: { type: Number },
  balanceFrom5000to10000: { type: Number },
  balanceFrom10000to25000: { type: Number },
  balanceFrom10001to25000: { type: Number },
  balanceFrom25000to50000: { type: Number },
  balanceFrom25001to50000: { type: Number },
  balanceMoreThan50000: { type: Number },
  balanceMoreThan10000: { type: Number },
  anyAmountDue: { type: String },
  cardId: { type: mongoose.Schema.Types.ObjectId, ref: "Card", required: true },
});

export const Charges = mongoose.model("Charges", chargesSchema);
