import { authenticateUser } from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);
    if (user) {
      req.session.userId = user.id;
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).send(userWithoutPassword);
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    res.status(500).send("An error occured during login");
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
