import express from "express";
import session from "express-session";
import connectSQLite3 from "connect-sqlite3";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import courseRouter from "./routes/courseRoutes.js";
import enrollmentRouter from "./routes/enrollmentsRoute.js";
import moduleLessonsRouter from "./routes/moduleLessonRoute.js";

const app = express();
const SQLiteStore = connectSQLite3(session);

//session
app.use(
  session({
    store: new SQLiteStore({ db: "sessions.sqlite" }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 30 * 60 * 1000 },
  })
);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Routes
app.use(userRouter);
app.use(authRouter);
app.use(courseRouter);
app.use(enrollmentRouter);
app.use(moduleLessonsRouter);

export default app;
