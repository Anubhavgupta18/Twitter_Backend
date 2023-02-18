import Tweet from '../models/tweet.js';
import crudRepository from './crud-repository.js';
class TweetRepository extends crudRepository{
    constructor() {
        super(Tweet);
    }

    async getWithComments(tweetId)
    {
        try {
            //lean function return a plain Js object not a mongoose object 
            const tweet = await Tweet.findById(tweetId).populate({ path: 'comments' }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offest,limit) {
        try {
            const tweet = await Tweet.find().skip(offest).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id) {
        try {
            //populate function is available only with mongoose query object not with a promise object so we need
            //use populate only with a mongoose query object.
            const tweet = await Tweet.findById(id).populate({path:'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;