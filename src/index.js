import express from 'express';
import {connect} from './config/db_config.js'
const app = express();

app.listen(3000,async ()=>{
    console.log('Server started');
    await connect();
    console.log('MongoDB connected successfully');
});