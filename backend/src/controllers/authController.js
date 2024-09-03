import { authenticateUser } from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);
    if (user) {
      req.session.userId = user.id;
      res.status(200).send("Login succussful");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send({ message: "Failed to log out." });
    }
    res.clearCookie("connect.sid");
    res.status(200).send({ message: "Logged out successfully." });
  });
};
