import express from "express";

const router = express.Router();

router.post("/register",(req,res)=>{
    console.log("user register");
})

export default router;