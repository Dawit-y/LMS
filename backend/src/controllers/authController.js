import { authenticateUser } from "../services/authService.js";
import { findUserById } from "../services/userService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);
    if (user) {
      req.session.userId = user.id;

      req.session.save((err) => {
        if (err) {
          res.send("Session save Failed");
        }
      });
      console.log("session in login", req.session);
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).send(userWithoutPassword);
    } else {
      res.status(400).send("Invalid email or password");
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

export const checkSession = async (req, res) => {
  console.log("session in checkSession", req.session);
  if (req.session.userId) {
    const user = await findUserById(req.session.userId);
    const { password, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } else {
    res.status(401).send("Not authenticated");
  }
};
