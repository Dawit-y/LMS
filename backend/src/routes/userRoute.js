import express from "express";
import {
  getAllUsersController,
  createUserController,
  updateUserController,
  deleteUserController,
  getAllCreatorsController,
  createCreatorController,
  updateCreatorController,
  deleteCreatorController,
  markLessonCompletedController,
  getCreatorByUserIdController,
  getCreatorCoursesController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsersController);
router.post("/users", createUserController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);
router.post("/markLessonCompleted", markLessonCompletedController);

router.get("/creators", getAllCreatorsController);
router.get("/creators/:id/courses", getCreatorCoursesController);
router.get("/creators/user/:id", getCreatorByUserIdController);
router.post("/creators", createCreatorController);
router.put("/creators/:id", updateCreatorController);
router.delete("/creators/:id", deleteCreatorController);

export default router;
