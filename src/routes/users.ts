import express from "express";
import * as UserController from "../controllers/users";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router.get(
  "https://try-notes-backend.onrender.com/",
  requiresAuth,
  UserController.getAuthenticatedUser
);

router.post(
  "https://try-notes-backend.onrender.com/signup",
  UserController.signUp
);

router.post(
  "https://try-notes-backend.onrender.com/login",
  UserController.login
);

router.post(
  "https://try-notes-backend.onrender.com/logout",
  UserController.logout
);

export default router;
