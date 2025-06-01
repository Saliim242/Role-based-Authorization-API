import express from "express";
import { admin, manager, user } from "../controllers/user.controlle.js";
import { AuthRoleMiddleware } from "../middlewares/auth.role.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/admin", verifyToken, AuthRoleMiddleware("admin"), admin);
router.get(
  "/manager",
  verifyToken,
  AuthRoleMiddleware("admin", "manager"),
  manager
);
router.get(
  "/user",
  verifyToken,
  AuthRoleMiddleware("admin", "manager", "user"),
  user
);

export default router;
