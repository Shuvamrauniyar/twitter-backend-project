import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";
import {createUser, login} from '../../controllers/user-controller.js';
import createComment from "../../controllers/comment-controller.js";
import toggleLike from "../../controllers/like-controller.js";
const router = express.Router();

router.post('/createTweet',createTweet);
router.post('/createUser',createUser);
router.post('/login',login);
router.post('/createComment',createComment);
router.post('/toggleLike',toggleLike);

export default router;