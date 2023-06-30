import express from 'express';
import {connect} from './config/db_config.js'
import Tweet from './models/tweet.js'
const app = express();

app.listen(3000,async ()=>{
    console.log('Server started');
    await connect();
    console.log('MongoDB connected successfully');
const res = await Tweet.create({
    content: 'first tweet',
})
console.log(res)
});