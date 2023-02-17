const express = require('express');
const connect = require('./configs/dbconfig');


const app = express();

app.listen(3000, async () => {
    console.log('server started on PORT:3000'); 
    await connect();
    console.log('Mongodb server connected');

});