import express from 'express';
import {connect} from './config/db_config.js'
import tweetService from './services/tweet-service.js';
import likeService from './services/like-service.js';
import commentService from './services/comment-service.js';
import userRepository from './repository/user-repo.js';
const app = express();

app.listen(3000,async ()=>{
    console.log('Server started');
    await connect();
    console.log('MongoDB connected successfully');
    // const UserRepo = new userRepository();
    // const user = await UserRepo.create({
    //   name: 'Shuvam',
    //   email: 'a@bgmail.com',
    //   password: 'himongo'
    // })
    // console.log(user);

    const CommentService = new commentService(); 
    const res = await CommentService.create(
          '64a46e92521192fdbdcfa049',//modelId: '64a46e92521192fdbdcfa049',
            'Tweet',
          '64aeedb2388712bf2256a865',
          'first comment'
    )
    console.log(res) 
});
//     const TweetService = new tweetService(); 
// const res = await TweetService.create({
//     content: '#good night ',
// })
// console.log(res) 
//  const LikeService = new likeService();
//    const res = await LikeService.toggleLike('64a46e92521192fdbdcfa049','Tweet','64a45b6dc6b1acfa0969c733'); 
//    console.log(res);