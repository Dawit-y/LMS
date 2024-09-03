import {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  findUserByEmail,
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
