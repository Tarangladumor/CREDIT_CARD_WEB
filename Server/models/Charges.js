import mongoose from "mongoose";

const chargesSchema = new mongoose.Schema({


export const Charges = mongoose.model("Charges", chargesSchema);
