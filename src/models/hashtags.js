//const mongoose = require('mongoose');
import mongoose from "mongoose";

const hashtags = new mongoose.Schema({
    title: {
        type : String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true});

// hashtags.pre('save', function(next){
//     this.title = this.title.toLowerCase();
//     next();
// })

const Hashtag = mongoose.model('Hashtag', hashtags);
//module.exports = Hashtag;
export default Hashtag;