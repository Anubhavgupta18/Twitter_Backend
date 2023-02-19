import express from "express";
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { create } from '../../controllers/comment-controller.js';
import { signup,signin } from '../../controllers/auth-controller.js';

const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweet/:id', getTweet);

router.post('/likes/toggle',toggleLike);

router.post('/comments', create);

router.post('/signup', signup);
router.post('/signin', signin);

export default router;