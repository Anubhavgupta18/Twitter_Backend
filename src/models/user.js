import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { secretKey } from "../configs/serverConfig.js";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique:true
    }
});

userSchema.pre('save', function () {
    const user = this;
    const SALT = bcrypt.genSaltSync(10);
    const encrpytedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encrpytedPassword;
});

userSchema.methods.checkPassword = function (userPlainPassword, encryptedPassword) {
    return bcrypt.compareSync(userPlainPassword, encryptedPassword);
}

userSchema.methods.genJWT = function (data) {
    const token = jwt.sign(data,secretKey, { expiresIn: '5h' });
    return token;
}


const User = mongoose.model('User', userSchema);

export default User;