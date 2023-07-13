import User from '../models/user.js'
import crudRepository from './crud-repository.js'

class userRepository extends crudRepository{
    constructor(){
        super(User);
    }
    // async getByEmail(email){
    //     try {
    //         const users = await User.findBy({email});
    //         return users;
    //     } catch (error) {
    //         console.log('error in user repo while fetching user by email');
    //         throw error;
    //     }
    // }
    async getByData(data){
        try {
            console.log(data + " in repo");
            const users = await User.findOne(data);
            console.log(users);
            return users;
            
        } catch (error) {
            console.log('error in user-repo');
            throw error;
        }
    }
}
export default userRepository;