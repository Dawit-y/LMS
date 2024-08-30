import { getAllUsers } from "../services/userService.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
