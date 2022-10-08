const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    likes:{
        type: String,
        required: true,
    },
    needlework: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    likedBy:{
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Post', PostSchema)