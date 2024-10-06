import {
  getAllLesson,
  updateLesson,
  createLesson,
  deleteLesson,
  getAllModule,
  getModule,
  getModuleLessons,
  createModule,
  updateModule,
  deleteModule,
} from "../services/moduleLessonServices.js";

export const getAllModulesController = async (req, res) => {
  try {
    const modules = await getAllModule();
    return res.status(200).json(modules);
  } catch (error) {
    return res.status(400).json(error);
  }
};
export const getModuleController = async (req, res) => {
  try {
    const id = req.params.id;
    const module = await getModule(id);
    return res.status(200).json(module);
  } catch (error) {
    return res.status(400).json(error);
  }
};
export const getModulesLessonsController = async (req, res) => {
  try {
    const id = req.params.id;
    const lessons = await getModuleLessons();
    return res.status(200).json(lessons);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createModuleController = async (req, res) => {
  try {
    const data = req.body;
    const module = await createModule(data);
    return res.status(201).json(module);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateModuleController = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const module = await updateModule(id, data);
    return res.status(200).json(module);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteModuleController = async (req, res) => {
  try {
    const id = req.params.id;
    const module = await deleteModule(id);
    return res.status(200).json(module);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getAllLessonController = async (req, res) => {
  try {
    const lessons = await getAllLesson();
    return res.status(200).json(lessons);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createLessonsController = async (req, res) => {
  try {
    const data = req.body;
    const lesson = await createLesson(data);
    return res.status(201).json(lesson);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateLessonsController = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const lesson = await updateLesson(id, data);
    return res.status(200).json(lesson);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteLessonsController = async (req, res) => {
  try {
    const id = req.params.id;
    const lesson = await deleteLesson(id);
    return res.status(200).json(lesson);
  } catch (error) {
    return res.status(400).json(error);
  }
};
