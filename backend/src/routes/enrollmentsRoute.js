import express from "express";
import {
  getEnrollmentController,
  updateEnrollmentController,
  createEnrollmentController,
  deleteEnrollmentController,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.get("/enrollments", getEnrollmentController);
router.post("/enrollments", createEnrollmentController);
router.put("/enrollments/:id", updateEnrollmentController);
router.delete("/enrollments/:id", deleteEnrollmentController);

export default router;
