import Like from '../models/like.js'
import crudRepository from './crud-repository.js'
class likeRepository extends crudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log('Something went wrong in like-repository');
            throw error;
        }
    }
}
export default likeRepository;
