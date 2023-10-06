import { User } from "../model/userModel.js";

export const getAllUser = async(req, res)=>{
    const users = await User.find({});
    res.json({
        success: true,
        users,
    })
};

export const createNewUser = async (req,res)=>{
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    res.status(201).cookie("temp1").json({
        success: true,
        message: "User Created successfully",
    })
};

export const getUserDetails = async(req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success: true,
        user,
    })
}