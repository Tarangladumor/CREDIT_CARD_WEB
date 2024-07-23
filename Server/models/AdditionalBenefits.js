import mongoose from "mongoose";

const additionalBenefits = new mongoose.Schema({
    welcomeBonus: [{
        type: String
    }],
    emiBenefit: [{
        type: String
    }],
    fuelSurcharge: [{
        type: String
    }],
    rewardPoints: [{
        type: String
    }],
    loungeAccess: [{
        type: String
    }],
    zeroLostCardLiablity: [{
        type: String
    }],
    milestoneBenefit: [{
        type: String
    }],
    otherBenefit: [{
        type: String
    }],
    travelBenefit: [{
        type: String
    }],
    diningBenefit: [{
        type: String
    }],
    conciergeServices: [{
        type: String
    }]
})

export const AdditionalBenefits = mongoose.model("AdditionalBenefits",additionalBenefits)