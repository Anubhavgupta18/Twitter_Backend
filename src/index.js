import express from "express";
import { connect } from "./configs/dbconfig.js";

import TweetService from "./services/tweet-service.js";
const service = new TweetService();

const app = express();

app.listen(3000, async () => {
    console.log('server started on PORT:3000'); 
    await connect();
    console.log('Mongodb server connected');

    const res = await service.create({ content: 'this is a #es6 module tweet' });
    console.log(res);
});