import {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  findUserByEmail,
  findUserById,
  getAllCreators,
  updateCreator,
  deleteCreator,
  createCreator,
  markLessonCompleted,
} from "../services/userService.js";
import bcrypt from "bcrypt";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const { password, email, ...otherData } = req.body;
    const alreadyUser = await findUserByEmail(email);
    if (alreadyUser)
      return res.send("user with that email already registered.");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      ...otherData,
      password: hashedPassword,
      email: email,
    });
    req.session.userId = user.id;
    const { password: _, ...userWithOutPassword } = user;
    console.log(userWithOutPassword);
    res.status(200).send(userWithOutPassword);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const user = await updateUser(userId, data);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await deleteUser(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const markLessonCompletedController = async (req, res) => {
  const { userId, lessonId } = req.body;
  try {
    const updatedUser = await markLessonCompleted(userId, lessonId);
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "User not found or lesson already completed" });
    }
    res.status(200).json({
      message: "Lesson marked as completed successfully",
      completedLessons: updatedUser.completedLessons.split(","),
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to mark lesson as completed",
        error: error.message,
      });
  }
};

export const getAllCreatorsController = async (req, res) => {
  try {
    const creators = await getAllCreators();
    res.status(200).send(creators);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const createCreatorController = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = findUserById(userId);
    if (!user) {
      return res.status(404).json("User Not found");
    }
    const creator = await createCreator(req.body);
    res.status(201).send(creator);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateCreatorController = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const user = await updateCreator(userId, data);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteCreatorController = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await deleteCreator(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
