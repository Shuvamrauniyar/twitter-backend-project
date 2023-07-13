import { userRepository } from "../repository/index.js";

class userService{
    constructor() {
        this.userRepo = new userRepository();
    }
    async signUp(data){
        try {
            const user = await this.userRepo.create(data);
            return user;
            
        } catch (error) {
            console.log('error in user service layer');
            return error;
        }
    }
    async login(data){
        try {
            const emailId = data.email; //for this you cant write({emailId}) as there is no property emailId ,for this write like ({email: emailId})
            //const email = data.email;
            const user = await this.userRepo.getByData({email: emailId});//must be passed as object {email} is same as {email: email} 
            //console.log(data.email);
            if(!user){
                throw {
                    message: 'user not registered'
                }
            }
            if(!user.comparePassword(data.password)){
                throw{
                    message: 'Incorrect password'
                };
            } 
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}
export default userService;