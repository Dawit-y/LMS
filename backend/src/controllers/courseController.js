import {
  getAllCourses,
  updateCourse,
  deleteCourse,
  createCourse,
} from "../services/courseService.js";

export const getCoursesController = async (req, res) => {
  try {
    const courses = await getAllCourses();
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateCourseController = async (req, res) => {
  try {
    const courseId = req.params.id;
    const data = req.body;
    const course = await updateCourse(courseId, data);
    return res.status(200).json(course);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const createCourseController = async (req, res) => {
  try {
    const data = req.body;
    const course = await createCourse(data);
    return res.status(200).json(course);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteCourseController = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await deleteCourse(courseId);
    return res.status(200).json(course);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
