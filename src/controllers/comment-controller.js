import commentService from "../services/comment-service.js";

const CommentService = new commentService();

const createComment = async (req,res) => {
    try {
        const response = await CommentService.create(req.query.modelId, 
            req.query.modelType, 
            req.body.userId, 
            req.body.content
        );
        return res.status(200).json({
            success:true,
            response: response,
            err:{}
        });
    } catch (error) {
        console.log('error in comment controller layer');
        return res.status(500).json({
            success:false,
            err:error
        });
    }
}

export default createComment;