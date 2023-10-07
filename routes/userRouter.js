import  Express  from "express";
import { getAllUser, getUserDetails, register } from "../controller/userController.js"

const router = Express.Router();

router.get("/all", getAllUser);
router.post("/new", register);
router.post("/login",)
router.route("/userid/:id")
    .get(getUserDetails)

export default router;