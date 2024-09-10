import express from "express";
import { login, logout, checkSession } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/check-session", checkSession);

export default router;
