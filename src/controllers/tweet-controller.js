import TweetService from '../services/tweet-service.js';
import upload from "../configs/file-upload-s3-config.js";

const tweetService = new TweetService();

const singleUploader = upload.single('image');


const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if (err) {
                return res.status(500).json({
                    error:err
                });
            }
            const payload = { ...req.body };
            payload.image = req.file.location;
            const tweet = await tweetService.create(payload);
            return res.status(201).json({
                data: tweet,
                success: true,
                message: 'Tweet created succesfully',
                err: {}
            });
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            err: error,
            data: {},
            message: 'Tweet was not created, some error occured'
        });
    }
}

const getTweet = async (req, res) => {
    try {
        const tweet = await tweetService.getTweet(req.params.id);
        return res.status(201).json({
            data: tweet,
            success: true,
            message: 'Tweet fetched succesfully',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            err: error,
            data: {},
            message: 'Tweet was not fetched, some error occured'
        });
    }
}

export {
    createTweet,
    getTweet
}