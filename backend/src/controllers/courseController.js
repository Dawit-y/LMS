import {
  getAllCourses,
  updateCourse,
  deleteCourse,
  createCourse,
  getCourse,
  getCourseModules,
} from "../services/courseService.js";

export const getCoursesController = async (req, res) => {
  try {
    const courses = await getAllCourses();
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getCourseController = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await getCourse(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).json(course);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getCourseModulesController = async (req, res) => {
  try {
    const id = req.params.id;
    const modules = await getCourseModules(id);
    return res.status(200).json(modules);
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
    const { name, description, image, creatorId } = req.body;
    const imageUrl = typeof image === "string" ? image : image.url;

    const data = {
      name,
      description,
      image: imageUrl || null,
      creatorId,
    };
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
