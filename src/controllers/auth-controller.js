import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const user = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            data: user,
            success: true,
            message: 'sucessfully signed up',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to sign up, something went wrong',
            err: error
        });
    }
}

export const signin = async (req,res) => {
        try {
            const token = await userService.signIn(req.body);
            return res.status(200).json({
                data: token,
                success: true,
                message: 'sucessfully signed in',
                err: {}
            });
        } catch (error) {
            console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to sign in, something went wrong',
            err: error
        });
        }
}