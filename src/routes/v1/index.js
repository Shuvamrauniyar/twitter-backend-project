import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import {createUser, login} from '../../controllers/user-controller.js';
import createComment from "../../controllers/comment-controller.js";
import toggleLike from "../../controllers/like-controller.js";

import { authenticate } from "../../middleware/auth-middleware.js";

const router = express.Router();

router.post('/createTweet',authenticate, createTweet);
router.get('/getTweet', getTweet);
router.post('/createUser',createUser);
router.post('/login',login);
router.post('/createComment',authenticate, createComment);
router.post('/toggleLike',authenticate, toggleLike);

export default router;