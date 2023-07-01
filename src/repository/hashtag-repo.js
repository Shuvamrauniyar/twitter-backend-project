import Hashtag from '../models/hashtag.js'
import crudRepository from './crud-repository'

class hashtagRepository extends crudRepository{
    constructor(){
        super(Hashtag);
    }
    async bulkCreate(data){
        try {
            const response = await Hashtag.insertMany(data);
            return response;
        } catch (error) {
            console.log('error in hashtag repo');
            return error;
        }
    }
    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return response;
        } catch (error) {
            console.log('error in hashtag repo');
            return error;
        }
    }
}
export default hashtagRepository;