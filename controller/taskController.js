import ErrorHandler from "../middlewares/error.js";
import { Task } from "../model/task.js";

export const newTask = async (req, res, next) => {

    try {
        const { title, description } = req.body;
        await Task.create({
            title,
            description,
            user: req.user,
        });
        res.status(201).json({
                success: true,
                message: "Task added successfully"
            });
    } catch (error) {
        next(error)
    }
};

export const getMyTask = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const tasks = await Task.find({ user: userId });
        if (!tasks) return next(new ErrorHandler("Task not found",))

        res.status(201).json({
            success: true,
            tasks,
        });
    } catch (error) {
        next(error)
    }
};

export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler("Invalid", 404))

        task.isCompleted = !task.isCompleted;
        await task.save();

        res.status(201).json({
            success: true,
            message: "Task Updated"
        });
    } catch (error) {
        next(error)
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return next(new ErrorHandler("Invalid Id",))

        await task.deleteOne();

        res.status(201).json({
            success: true,
            message: "Task Deleted"
        });
    } catch (error) {
        next(error)
    }
};