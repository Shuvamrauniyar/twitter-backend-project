import express from 'express';
import {connect} from './config/db_config.js'
import bodyParser from 'body-parser';
const app = express();
import dotenv from 'dotenv';
import apiRoutes from './routes/index.js';

dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT,async ()=>{
    console.log(`Server started at PORT ${PORT}`);
    
    await connect();
    console.log('MongoDB connected successfully');

    app.use('/api',apiRoutes);
});

// const UserRepo = new userRepository();
    // const user = await UserRepo.create({
    //   name: 'Shuvam',
    //   email: 'a@bgmail.com',
    //   password: 'himongo'
    // })
    // console.log(user);

    // const CommentService = new commentService(); 
    // const res = await CommentService.create(
    //       '64a46e92521192fdbdcfa049',//modelId: '64a46e92521192fdbdcfa049',
    //         'Tweet',
    //       '64aeedb2388712bf2256a865',
    //       'first comment'
    // )
    // console.log(res) 

//     const TweetService = new tweetService(); 
// const res = await TweetService.create({
//     content: '#good night ',
// })
// console.log(res) 
//  const LikeService = new likeService();
//    const res = await LikeService.toggleLike('64a46e92521192fdbdcfa049','Tweet','64a45b6dc6b1acfa0969c733'); 
//    console.log(res);