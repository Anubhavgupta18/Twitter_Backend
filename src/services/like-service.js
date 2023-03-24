import { TweetRepository, LikeRepository, CommentRepository } from "../repository/index.js";
class LikeService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.likeRepository = new LikeRepository();
        this.commentRepository = new CommentRepository();
    }
    async toggleLike(modelId, modelType, userId) {
        try {
            //get the model(tweet/comment) and the likes array
            if (modelType == 'Tweet') {
                var model = await this.tweetRepository.find(modelId);
            } else if (modelType == 'Comment') {
                var model = await this.commentRepository.get(modelId);
            } else {
                throw { err: 'Invalid Model Type' };
            }

            //find whethere like by that user on that tweet exits or not in the like collection
            var exists = await this.likeRepository.findByUserAndDoc({
                user: userId,
                onModel: modelType,
                doc: modelId
            });

            //If it exits then delete the like object from like collection as well as from the likes array
            //of tweet object.
            //Else create a like object and add that like object in likes array of tweet object
            if (exists) {
                model.likes.pull(exists);
                await model.save();
                await exists.remove();

                var isRemoved = "like was removed successfully";
            }
            else {
                const like = await this.likeRepository.create({
                    user: userId,
                    onModel: modelType,
                    doc: modelId
                });
                model.likes.push(like);
                await model.save();

                var isRemoved = "like was added successfully";
            }
            return isRemoved;
        } catch (error) {
            console.log('Something went wrong in the like service layer');
            throw error;
        }
    }
}
export default LikeService;