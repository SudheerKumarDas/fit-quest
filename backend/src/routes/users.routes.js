import express from "express";

import { usersRegister } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/register",usersRegister);

export default router;