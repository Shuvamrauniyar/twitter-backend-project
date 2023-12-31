import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
    onModel:{
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
        type:mongoose.Schema.Types.ObjectId,
        refPath: 'onModel',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{timestamps: true});

const Like = mongoose.model('Like',likeSchema);
export default Like;