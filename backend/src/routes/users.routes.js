import express from "express";

import { usersLogin, usersRegister } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/register",usersRegister);
router.post("/login",usersLogin);

export default router;