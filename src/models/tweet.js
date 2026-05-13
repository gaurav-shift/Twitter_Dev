//const mongoose = require('mongoose');
import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required : true,
        max: [250, 'Tweet cannot be more than 250 characters'] // 2nd parameter means it is thorowing error

    }
    // We will store multiple #s in a post so...
//     hashtags: [
//   {      type: mongoose.Schema.Types.ObjectId,
//         ref: 'Hashtag'}
//     ]
},{timestamps: true});

// // Custom validation for max 5 hashtags
// tweetSchema.path('hashtags').validate(function(value) {
//     return value.length <= 5;
// }, 'A tweet can have maximum 5 hashtags');



const Tweet = mongoose.model('Tweet', tweetSchema);
//module.exports = Tweet;
export default Tweet;