import express from "express";

import { usersInfo, usersLogin, usersRegister } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/register",usersRegister);
router.post("/login",usersLogin);
router.get("/me",usersInfo);

export default router;