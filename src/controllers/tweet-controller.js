import tweetService from "../services/tweet-service.js";

const TweetService = new tweetService();
//I faced a problem here in controller while i was writing all the functions inside a class same as service and repo layer, request was not forwading futher to service layer
//may be class is not suitable to handle the returned response 
const createTweet = async (req,res) => {
        try {
            console.log(req.body);
            const tweet = await TweetService.create(req.body);
            console.log(tweet);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: tweet,
                err: {}
            });
        } catch (error) {
            console.log('error in tweet-controller layer');
            return res.status(500).json({
                success: false,
                message: 'something went wrong',
                data: {},
                err: error
            });
        }
 }

export  {
    createTweet
};