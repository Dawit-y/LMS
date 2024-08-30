import express from "express";
import { getAllUsersController } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsersController);

export default router;
