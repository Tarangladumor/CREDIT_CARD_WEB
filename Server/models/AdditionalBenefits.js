import mongoose from "mongoose";

const additionalBenefits = new mongoose.Schema({
  welcomeBonus: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  emiBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  fuelSurcharge: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  rewardPoints: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  loungeAccess: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  zeroLostCardLiablity: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  milestoneBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  otherBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  travelBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  diningBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  conciergeServices: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  shoppingBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  entertainmentBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
  insuranceBenefit: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      listData: [
        {
          type: String,
        },
      ],
      note: {
        type: String,
      },
    },
  ],
});

export const AdditionalBenefits = mongoose.model(
  "AdditionalBenefits",
  additionalBenefits
);
