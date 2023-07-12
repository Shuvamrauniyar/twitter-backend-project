import { commentRepository,tweetRepository } from "../repository/index.js";

class commentService{
    constructor(){
        this.commentRepo = new commentRepository();
        this.tweetRepo = new tweetRepository();
    }

   async create(modelId, modelType, userId, content) {
        console.log(modelType);
        try {
            //checking on which model(either it is a tweet or comment(as comment on another comment is also possible which is also called as reply)) ,the comment is being made
        if(modelType == 'Comment'){
            var commentable = await this.commentRepo.get(modelId); //why var bwcause it is accessible globally but let is block scoped to which i cant modify below ,lineno.27
        }
        else if(modelType == 'Tweet'){
            var commentable = await this.tweetRepo.get(modelId);
        } else{
            throw new Error('model Type not matched');
        }
        const response = await this.commentRepo.create({
            content: content,
            userId: userId,
            commentable: modelId,
            onModel: modelType,
            comments: []
        });
        commentable.comments.push(response);
        await commentable.save();

        return response;
    } catch (error) {
        throw error;
    }
     
   }
}

export default commentService;