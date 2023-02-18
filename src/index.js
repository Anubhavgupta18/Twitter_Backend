import express from "express";
import { connect } from "./configs/dbconfig.js";
import { PORT } from './configs/serverConfig.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log('server started on PORT:3000'); 
    await connect();
    console.log('Mongodb server connected');

});