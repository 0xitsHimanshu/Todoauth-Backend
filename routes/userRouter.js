import  Express  from "express";
import { getAllUser } from "../controller/userController.js"

const router = Express.Router();

router.get("/all", getAllUser);
router.post("/new", createNewUser);
router.get("/userid/:id", getUserDetail);

export default router;