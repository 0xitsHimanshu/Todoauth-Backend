import Express  from "express";
import userRouter from "./routes/userRouter.js"
import {config} from "dotenv";

export const app = Express();

config({
    path:"./data/config.env",
});

//using middlewares
app.use(Express.json());
app.use("/users", userRouter);

app.get("/", (req,res)=>{
    res.send("Hey All")
})