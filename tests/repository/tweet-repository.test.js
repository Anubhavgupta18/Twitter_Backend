import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe('this contains all the tests for creating a tweet', () => {
    test('to create a tweet with content', async () => {
        const tweetRepo = new TweetRepository();
        const data = {
            content: "this is a testing tweet"
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return {
                ...data,
                createdAt: '2023-3-24',
                updatedAt: '2023-3-24',
            }
        }
        )
        const tweet = await tweetRepo.create(data);
        expect(spy).toHaveBeenCalled();
        expect(tweet.createdAt).toBeDefined();
        expect(tweet.content).toBe(data.content);
    })

    test('creating a tweet throws an error', async () => {
        const tweetRepo = new TweetRepository();
        const data = {
            content: "testing tweet"
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return new Error('something went wrong');
        }
        )
        const tweet = await tweetRepo.create(data).catch(err => {
            expect(spy).toHaveBeenCalled();
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('something went wron');
        })
    })
})

describe('test cases for getting all tweets', () => {
    test('getting all tweets with limit functionality', async () => {
        const tweetRepo = new TweetRepository();
        const data = {
            content: "testing tweet 2"
        }
        const tweetsArray = [
            {
                ...data,
                createdAt: '2023-3-24',
                updatedAt: '2023-3-24',
            },
            {
                ...data,
                createdAt: '2023-3-24',
                updatedAt: '2023-3-24',
            },
            {
                ...data,
                createdAt: '2023-3-24',
                updatedAt: '2023-3-24',
            },
            {
                ...data,
                createdAt: '2023-3-24',
                updatedAt: '2023-3-24',
            }
        ]
        const payload = {
            tweetsArray
        };
        payload.skip = jest.fn((offset) => payload);
        payload.limit = jest.fn((limit) => payload.tweetsArray.slice(0,limit));
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
            return payload;
        }
        )
        const tweets = await tweetRepo.getAll(0, 3);
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(3);
    })
})