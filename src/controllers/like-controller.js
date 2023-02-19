import LikeService from "../services/like-service.js";

const likeService = new LikeService();

const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(201).json({
            data: response,
            success: true,
            message:'Like toggled succesfully',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            err: error,
            data: {},
            message: 'Like was not toggled, some error occured'
        });
    }
}

export {
    toggleLike
}