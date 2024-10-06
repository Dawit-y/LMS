import express from "express";
import {
  getCoursesController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
  getCourseController,
  getCourseModulesController,
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/courses", getCoursesController);
router.get("/courses/:id", getCourseController);
router.get("/courses/:id/modules", getCourseModulesController);
router.post("/courses", createCourseController);
router.put("/courses/:id", updateCourseController);
router.delete("/courses/:id", deleteCourseController);

export default router;
