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
        requred: true,
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
})

module.exports = mongoose.model('Post', PostSchema)