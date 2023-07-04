import User from '../models/user.js'
import crudRepository from './crud-repository.js'

class userRepository extends crudRepository{
    constructor(){
        super(User);
    }
    async getByData(data){
        try {
            const users = await User.findOne(data);
            return users;
            
        } catch (error) {
            console.log('error in user-repo');
            throw error;
        }
    }
}
export default userRepository;