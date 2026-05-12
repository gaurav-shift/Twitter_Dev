//const mongoose  = require('mongoose');

import mongoose from "mongoose";

export const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');

}

//module.exports = connect;