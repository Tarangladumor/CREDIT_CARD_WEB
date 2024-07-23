import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Subscriber = mongoose.model('Subscriber', subscriberSchema);

