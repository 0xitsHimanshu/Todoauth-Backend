import  Express  from "express";
import {} from "../controller/userController.js"

const router = Express.Router();

router.get("/all", getAlluser);
router.post("/new", createNewUser);
router.get("/userid/:id", getUserDetail);

export default router;