import Express  from "express";
import userRouter from "./routes/userRouter.js"
import taskRouter from "./routes/taskRouter.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = Express();

config({
    path:"./data/config.env",
});

//using middlewares
app.use(Express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req,res)=>{
    res.send("Hey All")
})

//using error middlware
app.use(errorMiddleware);