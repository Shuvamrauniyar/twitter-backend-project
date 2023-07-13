import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

//hooks or trigger for encrypting password
userSchema.pre('save', function(next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});

//for comparing passwords during login
userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password, this.password); //this.password = encrypted ones
}

//for generating tokens
userSchema.methods.genJWT = function generate() {
    return jwt.sign({id:this._id, email: this.email}, 'twitter_secret_key',{
        expiresIn: '1h'
    });
}
const User = mongoose.model('User',userSchema);
export default User;
