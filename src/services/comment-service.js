import { CommentRepository,TweetRepository }from "../repository/index.js";


class CommentService{
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }
    async createComment(modelId,modelType,userId,content) {
        try {
            if (modelType === 'Tweet') {
                var model = await this.tweetRepository.get(modelId);
            } else if (modelType === 'Comment') {
                var model = await this.commentRepository.get(modelId);
            } else {
                throw new Error('Invalid model type');
            }

            const comment = await this.commentRepository.create({
                content: content,
                user: userId,
                onModel: modelType,
                doc: modelId,
                comments: []
            });
            console.log(comment);
            model.comments.push(comment);
            await model.save();

            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default CommentService;