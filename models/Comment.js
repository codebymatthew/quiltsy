const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    likes:{
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
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likedBy: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Comment', CommentSchema)