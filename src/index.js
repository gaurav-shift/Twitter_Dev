import express from 'express' ;
import {connect} from './config/database.js';
const app = express(); 

import TweetService from './services/tweet-service.js';
app.listen(3000 , async () => {
    console.log("Server Started");
    await connect();
    console.log('Mongo db connected');

    let serv = new TweetService();
    await serv.create({content: 'Done with #refactor? '})

})