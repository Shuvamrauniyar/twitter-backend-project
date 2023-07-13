import { userRepository } from "../repository/index.js";
import userService from "../services/user-service.js";

const userRepo = new userRepository();
const UserService = new userService();

export const createUser = async(req,res) => {
    try {
        const response = await UserService.signUp(req.body);
        return res.status(200).json({
            success:true,
            response: response,
            message: 'Successfully created user',
            err:{}
        });
    } catch (error) {
        console.log('error in user-controller layer');
        return res.status(500).json({
            success:false,
            message: 'error in user-controller layer',
            err:error
        });
    }
}
export const login = async(req,res) => {
    try {
        const response = await UserService.login(req.body);
        return res.status(200).json({
            success:true,
            response: response,
            message: 'Successfully logged in',
            err:{}
        });
    } catch (error) {
        console.log('error in controller layer');
        return res.status(500).json({
            success:false,
            message: 'error in user-controller layer',
            err:error
        });
    }
}  

// export default createUser;