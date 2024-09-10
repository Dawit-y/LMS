import express from "express";
import session from "express-session";
import connectSQLite3 from "connect-sqlite3";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import { requireAuth } from "./middlewares/authMiddleware.js";

const app = express();
const SQLiteStore = connectSQLite3(session);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//session
app.use(
  session({
    store: new SQLiteStore({ db: "sessions.sqlite" }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

//Routes
app.use(userRouter);
app.use(authRouter);

export default app;
