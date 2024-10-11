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
import multer from "multer";
import path from "path";

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // You can change this path to wherever you want to store files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter to only accept certain file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/; // Adjust based on allowed file types
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (extname) {
    return cb(null, true);
  } else {
    cb("Error: Invalid file type!");
  }
};

const upload = multer({ storage, fileFilter });

router.get("/modules", getAllModulesController);
router.get("/modules/:id", getModuleController);
router.get("/modules/:id/lessons", getModulesLessonsController);
router.post("/modules", createModuleController);
router.put("/modules/:id", updateModuleController);
router.delete("/modules/:id", deleteModuleController);

router.get("/lessons", getAllLessonController);
router.post("/lessons", upload.single("file"), createLessonsController);
router.put("/lessons/:id", updateLessonsController);
router.delete("/lessons/:id", deleteLessonsController);

export default router;
