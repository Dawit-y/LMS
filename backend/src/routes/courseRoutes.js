import express from "express";
import {
  getCoursesController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/courses", getCoursesController);
router.post("/courses", createCourseController);
router.put("/courses/:id", updateCourseController);
router.delete("/courses/:id", deleteCourseController);

export default router;
