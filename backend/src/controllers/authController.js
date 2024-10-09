import passport from "passport";

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("user in login controller", user);
    if (err) {
      return res.status(500).send("Internal Server Error");
    }
    if (!user) {
      return res.status(401).send(info.message); // Invalid credentials
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).send("Login failed");
      }
      // Exclude password from user object before sending
      const { password, ...userWithoutPassword } = user;
      return res.status(200).json(userWithoutPassword); // Send back user info
    });
  })(req, res, next);
};
export const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Failed to log out.");
    }

    res.clearCookie("connect.sid"); // Clear session cookie
    return res.status(200).send({ message: "Logged out successfully." });
  });
};

export const checkSession = (req, res) => {
  if (req.isAuthenticated()) {
    const { password, ...userWithoutPassword } = req.user;
    return res.status(200).json(userWithoutPassword);
  } else {
    return res.status(401).send("Not authenticated");
  }
};
