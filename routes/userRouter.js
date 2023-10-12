import  Express  from "express";
import { getAllUser, getMyProfile, login, logout, register } from "../controller/userController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = Express.Router();

router.get("/all", getAllUser);
router.post("/new", register);
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated, getMyProfile)

export default router;