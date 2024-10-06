import express from "express";
import {
  getAllModulesController,
  getAllLessonController,
  createLessonsController,
  createModuleController,
  updateLessonsController,
  updateModuleController,
  deleteLessonsController,
  deleteModuleController,
  getModuleController,
  getModulesLessonsController,
} from "../controllers/moduleLessonContoller.js";

const router = express.Router();

router.get("/modules", getAllModulesController);
router.get("/modules/:id", getModuleController);
router.get("/modules/:id/lessons", getModulesLessonsController);
router.post("/modules", createModuleController);
router.put("/modules/:id", updateModuleController);
router.delete("/modules/:id", deleteModuleController);

router.get("/lessons", getAllLessonController);
router.post("/lessons", createLessonsController);
router.put("/lessons/:id", updateLessonsController);
router.delete("/lessons/:id", deleteLessonsController);

export default router;
