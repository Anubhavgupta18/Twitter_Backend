import Like from '../models/like.js';
import crudRepository from './crud-repository.js';

class likeRepository extends crudRepository{
    constructor() {
        super(Like);
    }
    async findByUserAndDoc(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

export default likeRepository;