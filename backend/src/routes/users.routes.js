import express from "express";

import { userLogout, usersInfo, usersLogin, usersRegister } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/register",usersRegister);
router.post("/login",usersLogin);
router.get("/me",usersInfo);
router.post("/logout",userLogout);

export default router;