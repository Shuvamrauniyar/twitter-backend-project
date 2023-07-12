import { userRepository } from "../repository/index.js";

const userRepo = new userRepository();
const createUser = async(req,res) => {
    try {
        const response = await userRepo.create(req.body);
        return res.status(200).json({
            success:true,
            response: response,
            err:{}
        });
    } catch (error) {
        console.log('error in user-controller layer');
        return res.status(500).json({
            success:false,
            err:error
        });
    }
}

export default createUser;