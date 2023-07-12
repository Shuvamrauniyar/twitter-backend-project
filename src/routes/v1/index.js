import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";
import createUser from '../../controllers/user-controller.js';
import createComment from "../../controllers/comment-controller.js";
import toggleLike from "../../controllers/like-controller.js";
const router = express.Router();

router.post('/createTweet',createTweet);
router.post('/createUser',createUser);
router.post('/createComment',createComment);
router.post('/toggleLike',toggleLike);

export default router;