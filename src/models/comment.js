//const mongoose = require('mongoose');

import mongoose from "mongoose";

const commentScema = new mongoose.Schema({
    content : {
        type: String,
        required : true
    },
    userEmail : {
        type: String
    },
    onModel : {
        type: String,
        required: true,
        enum: ['Tweet','Comment']
    },
    commentable : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    } 

},{timestamps: true});

const Comment = mongoose.model('Comment', commentScema);
//module.exports = Comment;
export default Comment;