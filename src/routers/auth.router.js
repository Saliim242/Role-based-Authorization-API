import express from "express";

// Import Controllers
import { register, login, getAllUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUser);

export default router;
