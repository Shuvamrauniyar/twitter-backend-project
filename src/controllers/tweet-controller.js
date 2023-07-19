import tweetService from "../services/tweet-service.js";
import upload from '../config/file_upload_config.js';

import tweetRepo from '../repository/tweet-repo.js'
const TweetService = new tweetService();
//I faced a problem here in controller while i was writing all the functions inside a class same as service and repo layer, request was not forwading futher to service layer
//may be class is not suitable to handle the returned response 

const singleFileUploader = upload.single('image');

const createTweet = async (req,res) => {
        try {
            
            singleFileUploader (req, res, async function(err, data) {
                if(err){
                    res.status(500).json({error: err});
                }
                console.log('reqfile = ' ,req.file.originalname);
                const payload = {...req.body};
                payload.image = req.file.location;
               // console.log(payload.image);
               // res.send('Successfully uploaded ' + req.files.length + ' files!');
                const tweet = await TweetService.create(payload);
                console.log(tweet);
                return res.status(201).json({
                    success: true,
                    message: 'Successfully created a new tweet',
                    data: tweet,
                    err: {}
                });
            })
        } catch (error) {
            console.log(error);
            console.log('error in tweet-controller layer');
            return res.status(500).json({
                success: false,
                message: 'something went wrong',
                data: {},
                err: error
            });
        }
 }
const getTweet = async(req,res) => {
    try {

        const tweets = await tweetRepo.get(req.params.id);
        return res.status(200).json({
            content: tweets
        });

    } catch (error) {
        console.log('error on tweet controller');
        return res.status(500).json({
            err: error,
            message: 'failed fetching'

        })
    }
}
export  {
    createTweet,
    getTweet
};