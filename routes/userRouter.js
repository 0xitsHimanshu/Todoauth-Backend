import  Express  from "express";
import { createNewUser, getAllUser, getUserDetails } from "../controller/userController.js"

const router = Express.Router();

router.get("/all", getAllUser);
router.post("/new", createNewUser);
router.get("/userid/:id", getUserDetails);

export default router;