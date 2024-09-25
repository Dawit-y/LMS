import express from "express";
import {
  getEnrollmentController,
  updateEnrollmentController,
  createEnrollmentController,
  deleteEnrollmentController,
  getStatusController,
  createStatusController,
  updateStatusController,
  deleteStatusController,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.get("/enrollments", getEnrollmentController);
router.post("/enrollments", createEnrollmentController);
router.put("/enrollments/:id", updateEnrollmentController);
router.delete("/enrollments/:id", deleteEnrollmentController);
router.get("/status", getStatusController);
router.post("/status", createStatusController);
router.put("/status/:id", updateStatusController);
router.delete("/status/:id", deleteStatusController);

export default router;
