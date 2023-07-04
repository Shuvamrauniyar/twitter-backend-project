import { likeRepository, tweetRepository } from "../repository/index.js";
import Tweet from "../models/tweet.js";

class likeService {
    constructor() {
        this.likeRepo = new likeRepository();
        this.tweetRepo = new tweetRepository();
    }

    async toggleLike(modelId,modelType,userId) {
        console.log("modelType is ",modelType);
        //below if condn are to check whether the modelType provided is correct or not
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepo.find(modelId); //this likeable and line no.24 likeable are different
              console.log("here",likeable);
        } else if(modelType == 'Comment'){
            //TODO
        }
        else {
            throw new Error('unknown model type');
        }
        //finding whether the user has liked the tweet or comment previously or not
        const exists = await this.likeRepo.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId  //this reflects on which model(either tweet or comment), the like has been applied
        });
         console.log("exists",exists);
        if(exists) {
           likeable.likes.pull(exists.id);
            await likeable.save();
           await exists.deleteOne();
           //await exits.remove(); this is currently not working
            var isAdded = false;
        } else {
            const newLike = await this.likeRepo.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            console.log('newlike is', newLike);
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }
        return isAdded;
    }
}
export default likeService;