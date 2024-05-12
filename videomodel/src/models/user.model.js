import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const userschema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true

    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true

    },
    Fullname:{
        type: String,
        required: true,
       
        lowercase: true,
        index: true

    },
    avatar:{
        type: String,
        

    },
    password:{
        type: String,
        required: [true,"password is required"]
    }

},{timestamps : true})
//pre is mongoose middleware use jab ye hone wala h usse phle karwana hai jaise save hoga usse phle delete hoga usse  phle
userschema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password,10)  // password hash krega aur 10 rounds bata raha apne paas se rounds de skte ho/
        next()
    }

})
userschema.methods.generateAccessToken = function(){
    return jwt.sign(
        //payload
        {
        _id: this._id,
        email: this.email,
        username: this.username,
        Fullname: this.Fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userschema.methods.generateRefreshToken = function(){
    return jwt.sign(
        //payload
        {
        _id: this._id,
        email: this.email,
        username: this.username,
        Fullname: this.Fullname
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
userschema.methods.generateRefreshToken = function(){}
userschema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password)
}
export const usermodel = mongoose.model('usermodel',userschema)