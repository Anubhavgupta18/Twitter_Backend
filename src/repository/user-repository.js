import User from "../models/user.js";
import crudRepository from "./crud-repository.js";

class UserRepository extends crudRepository{
    constructor() {
        super(User);
    }
    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserRepository;
    
