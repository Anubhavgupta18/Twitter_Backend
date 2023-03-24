import express from "express";
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { create } from '../../controllers/comment-controller.js';
import { signup,signin } from '../../controllers/auth-controller.js';
import { authenticate } from "../../middlewares/authenticate.js";
//import { imageUploader } from "../../middlewares/image-middleware.js";

const router = express.Router();

router.post('/tweets', authenticate, createTweet);
router.get('/tweet/:id', getTweet);

router.post('/likes/toggle', authenticate,toggleLike);

router.post('/comments',authenticate, create);

router.post('/signup', signup);
router.post('/signin', signin);

export default router;