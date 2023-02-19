import { UserRepository } from "../repository/index.js";

class UserService{
    constructor() {
        this.userRepository = new UserRepository();
    }
    
    async signUp(data) {
        try {
            const user = this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserService;