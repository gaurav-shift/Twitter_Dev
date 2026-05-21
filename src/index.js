import express from 'express' ;
import bodyParser from 'body-parser';
import {connect} from './config/database.js';


import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
import apiRoutes from  './routes/index.js';



import { TweetRepository, UserRepository } from './repository/index.js';
import User from './models/user.js';
import LikeService from './services/like-service.js';

const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(passport.initialize()); // Initialize Passport middleware 
passportAuth(passport); // Configure Passport with JWT strategy :) 

app.use('/api',apiRoutes);
app.listen(3000 , async () => {
    console.log("Server Started");
    await connect();
    console.log('Mongo db connected');


})