import Express  from "express";
import userRouter from "./routes/userRouter.js"
import taskRouter from "./routes/taskRouter.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";

export const app = Express();

config({
    path:"./data/config.env",
});

//using middlewares
app.use(Express.json());
app.use(cookieParser());

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req,res)=>{
    res.send("Hey All")
})

