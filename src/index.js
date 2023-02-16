const express = require('express');
const connect = require('./configs/dbconfig');
const Comment = require('./models/comment');

const tweetrepo = require('./repository/tweet-repository'); 


const app = express();

app.listen(3000, async () => {
    console.log('server started on PORT:3000'); 
    await connect();
    console.log('Mongodb server connected');
    const Tweet = new tweetrepo();
    const tweet = await Tweet.create({content:'This tweet is triggered using hooks'});
    console.log(tweet);
});