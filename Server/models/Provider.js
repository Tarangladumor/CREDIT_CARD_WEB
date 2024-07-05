import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image: {
        type: String,
    }
})

export const Provider = mongoose.model("Provider",providerSchema)