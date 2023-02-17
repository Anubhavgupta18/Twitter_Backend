import { TweetRepository, HashtagRepository } from "../repository/index.js";


class TweetService{
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data)
    {
        try {
            const content = data.content;

            //using a regular expression we are filtering hashtags
            const tags = content.match(/#[a-zA-Z0-9_]+/g)
                .map((tag) => tag.substring(1).toLowerCase());
            
            const tweet = await this.tweetRepository.create(data);
            
            //passing title of tags array inside findByName to get already present tags inside collect Hashtag
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

            //filtering the array of objects to get title of tags
            const titleOfAlreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);

            //getting title of tags which are not present inside collection
            let newTags = tags.filter((tag) => !(titleOfAlreadyPresentTags.includes(tag)));

            //creating hashtag object from titles
            newTags = newTags.map((tag) => {
                return { title: tag, tweets: [tweet.id] }
            });

            await this.hashtagRepository.bulkCreate(newTags);

            //adding tweetId inside tweets array which were already present inside collection
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });

            return tweet; 
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetService;