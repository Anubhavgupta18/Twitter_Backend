import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

const User = mongoose.model('User', userSchema);

export default User;