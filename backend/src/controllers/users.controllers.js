import User from "../models/users.models.js";

import bcrypt from "bcrypt";

export const usersRegister = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                message:"provide all fields"
            })
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({
                message:"user already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            username:username,
            email:email,
            password:hashedPassword
        })
        res.status(201).json({
            message:"New User Created Successfully"
        })
    } catch (error) {
        console.error("Error in user register ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}