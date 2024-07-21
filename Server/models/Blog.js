import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    thumbnailImage:{
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true,
    },
    readingTime: {
        type: Number // Time in minutes
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const Blog = mongoose.model("Blog",blogSchema);