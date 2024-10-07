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
          return res.status(500).send("Session save failed.");
        }
        console.log("Session in login", req.session);
        const { password: _, ...userWithoutPassword } = user;
        return res.status(200).send(userWithoutPassword);
      });
    } else {
      return res.status(400).send("Invalid email or password");
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("An error occurred during login");
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
  console.log("Session in checkSession", req.session);
  if (req.session.userId) {
    const user = await findUserById(req.session.userId);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return res.status(200).json(userWithoutPassword);
    } else {
      return res.status(404).send("User not found");
    }
  }
  return res.status(401).send("Not authenticated");
};