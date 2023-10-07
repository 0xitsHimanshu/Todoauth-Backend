import  Express  from "express";
import { getAllUser, getMyProfile, login, register } from "../controller/userController.js"

const router = Express.Router();

router.get("/all", getAllUser);
router.post("/new", register);
router.post("/login",login)
router.get("/me",getMyProfile)

export default router;