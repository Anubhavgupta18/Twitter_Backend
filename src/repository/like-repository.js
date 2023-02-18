import Like from '../models/like.js';
import crudRepository from './crud-repository.js';

class likeRepository extends crudRepository{
    constructor() {
        super(Like);
    }
};

export default likeRepository;