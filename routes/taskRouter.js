import  Express  from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controller/taskController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Express.Router();

router.post("/new", isAuthenticated ,newTask )
router.get("/my",isAuthenticated, getMyTask )
router.route("/:id")
    .put(isAuthenticated,updateTask)
    .delete(isAuthenticated,deleteTask);

export default router;