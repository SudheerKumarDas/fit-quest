import express from "express";
import cookieParser from "cookie-parser";

import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users",usersRoutes);

export default app;