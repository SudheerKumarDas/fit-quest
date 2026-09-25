import User from "../models/users.models.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const usersRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "provide all fields",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "user already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "New User Created Successfully",
    });
  } catch (error) {
    console.error("Error in user register ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const usersLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "provide all fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "provide valid credentials",
      });
    }
    const isPasswordMatch = bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(403).json({
        message: "provide valid credentials",
      });
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge:7*24*60*60*1000,
    })
    res.status(200).json({
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("error in user login");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
