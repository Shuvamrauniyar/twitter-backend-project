import likeService from "../services/like-service.js";

const LikeService = new likeService();

const toggleLike = async (req,res) => {
    try {
        console.log(req.query);
        const response = await LikeService.toggleLike(req.query.modelId, 
            req.query.modelType,
            req.body.userId
        );
        return res.status(200).json({
            success:true,
            response: response,
            err:{}
        });
    } catch (error) {
        console.log('error in like-controller layer');
        return res.status(500).json({
            success:false,
            err:error
        });
    }
}
export default toggleLike;