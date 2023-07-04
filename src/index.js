import express from 'express';
import {connect} from './config/db_config.js'
import tweetService from './services/tweet-service.js';
import likeService from './services/like-service.js';

const app = express();

app.listen(3000,async ()=>{
    console.log('Server started');
    await connect();
    console.log('MongoDB connected successfully');
//     const TweetService = new tweetService(); 
// const res = await TweetService.create({
//     content: '#good night ',
// })
// console.log(res) 
 const LikeService = new likeService();
   const res = await LikeService.toggleLike('64a46e92521192fdbdcfa049','Tweet','64a45b6dc6b1acfa0969c733'); 
   console.log(res);
});