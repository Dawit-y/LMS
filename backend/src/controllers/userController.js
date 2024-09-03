import {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
} from "../services/userService.js";

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
    const data = req.body;
    const user = await createUser(data);
    res.status(200).send(user);
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
