import express from "express";
import { admin, manager, user } from "../controllers/user.controlle.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/admin", verifyToken, admin);
router.get("/manager", verifyToken, manager);
router.get("/user", user);


export default router;
