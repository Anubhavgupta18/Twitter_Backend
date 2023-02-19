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
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.userRepository.findBy({ email: data.email });

            if (!user) {
                throw {
                    message: 'No user found',
                    success:false
                }
            }

            if (!user.checkPassword(data.password, user.password)) {
                throw {
                    message: 'incorrect password',
                    success:false
                }
            }
            const token = user.genJWT({ id: user.id, email: user.email });

            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserService;