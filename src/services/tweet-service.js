import { tweetRepository, hashtagRepository } from "../repository/index.js";

class tweetService {
    constructor() {
        this.tweetRepo = new tweetRepository();
        this.hashtagRepo = new hashtagRepository();
    }

    async create(data) {
        const content = data.content;
        console.log(data.content);
        //extracting hashtags from the tweet posts
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepo.create(data);
        let alreadyPresentTags = await this.hashtagRepo.findByName(tags);
        console.log(alreadyPresentTags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));

        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepo.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet; //dont forget to the return the newly created tweet
    }
}
export default tweetService;