import express from "express";
import userRouter from "./routes/userRoute.js";

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use(userRouter);

export default app;
