import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

const create = async (req,res) => {
    try {
        const comment = await commentService.createComment(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
        return res.status(201).json({
            data: comment,
            success: true,
            message:'Comment created succesfully',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            err: error,
            data: {},
            message: 'Comment was not created, some error occured'
        });
    }
}

export {
    create
}