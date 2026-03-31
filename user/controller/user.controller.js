const jwt= require('jsonwebtoken')
const bcryptjs= require('bcryptjs')
const userModel= require('../models/user.model')

const userRegister= async (req,res) => {
    try {
        
        const {name,email,password}=req.body;

        const salt= bcryptjs.genSaltSync(10)
        const hashed= bcryptjs.hashSync(password,salt)

        const user= await userModel.create({
            name,
            email,
            password:hashed
        })

        const token= jwt.sign({
            email
        })

        res.cookie("token",token)
        res.status(200).json({
            message:"created",
            token,
            user
        })

    } catch (error) {
        console.log(`error register ${error}`);
        res.status(400).json({
            message:` error register ${error}`
        })
    }
}

module.exports={
    userRegister
}