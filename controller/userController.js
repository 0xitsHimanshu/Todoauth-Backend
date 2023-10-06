import { User } from "../model/userModel";

export const getAllUser = async(req, res)=>{
    const users = await User.find({});
    console.log(req.query);
    res.json({
        success: true,
        users,
    })
};

export const createNewUser = async (req,res)=>{
    const {name, email, password} = req
}