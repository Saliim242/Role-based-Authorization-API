import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { connectDb } from "../src/config/db.conig.js";

// Import Routers

import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.route.js";

// config the dotEnv

dotenv.config();

// Connect DB
connectDb();

// make express app

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers

app.use("/api/auth/", authRouter);
app.use("/api/users/", userRouter);

// Start the server

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.blue.bold);
});
