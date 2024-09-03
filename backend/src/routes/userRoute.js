import express from "express";
import {
  getAllUsersController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsersController);
router.post("/users", createUserController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

export default router;
