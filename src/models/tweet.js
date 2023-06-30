import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [200,'Tweet cannot exceeds more than 200 length letters']
    },
    likes:[ //one tweet can have many likes so the attributes must be a array here
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],

}, {timestamps: true});

const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;