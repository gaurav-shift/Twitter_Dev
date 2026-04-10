const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required : true
    },
    userEmail : {
        type: String
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment' // just type name of the models 
        }
    ]
},{timestamps: true});

tweetSchema.virtual('contentWithemail').get(function process(){
    return this.content + "\n Created By" + this.userEmail;
});

tweetSchema.pre('save', async function(){
    console.log('Inside a hook');
    //next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;