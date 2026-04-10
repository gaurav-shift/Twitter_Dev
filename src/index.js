const express = require('express');
const connect = require('./config/database');
const app = express(); 

const TweetRepository = require('./repository/tweet-repository');

app.listen(3000 , async () => {
    console.log("Server Started");
    await connect();
    console.log('Mongo db connected');

    // const tweet = await Tweet.create({
    //     content: 'First Tweet',
    //     userEmail: 'a@b.com'
    // });

    // const tweets = await Tweet.find();
    // console.log(tweets);

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getAll(0,4);
    // console.log(tweet[0].contentWithemail);
    const tweet = await tweetRepo.create({content: 'With hooks now'});
    console.log(tweet);

})