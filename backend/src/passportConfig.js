import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { authenticateUser } from "./services/authService.js";
import { findUserById } from "./services/userService.js";

// Passport Local Strategy for login
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // Use 'email' instead of the default 'username'
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        console.log(email, password)
        const user = await authenticateUser(email, password);
        if (!user) {
          return done(null, false, { message: "Invalid email or password" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
});

export default passport;
