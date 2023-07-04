import Tweet from '../models/tweet.js'
import crudRepository from './crud-repository.js'

class tweetRepository extends crudRepository{
    constructor(){
        super(Tweet);
    }
    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'comments', // it is the property of Tweet model , in this comment attribute we have given ref to Comment model
                populate: {
                    path: 'comments' //this is manual way of populating two nested comments only, think about populating n number of nested comments because we arenot here restricting the number of nested comments
                }
            }).lean();
            return like;
        } catch (error) {
            console.log('Something went wrong in tweet-repository');
            throw error;
        }
    }
    async getByPage(offset,limit){
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        } catch (error) {
            console.log('Something went wrong in tweet-repository');
            throw error;
        }
    }
    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            console.log("error in tweet repo while finding by id");
            throw error;
        }
    }
}
export default tweetRepository;
