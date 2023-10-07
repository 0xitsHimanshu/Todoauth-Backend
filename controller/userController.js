import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const getAllUser = async(req, res)=>{

};

export const login = async (req, res)=>{
    
};

export const register = async (req,res)=>{
    const {name , email, password} = req.body;
    let user = await User.findOne({email});

    if(user)
        return res.status(404).json({
            success:false,
            message: "User already exist",
        })
    
    const hashedPassword = await bcrypt.hash(password,10);
   user =  await User.create({name, email, password: hashedPassword});

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

    res.status(201).cookie("token",token).json({
        success:true, 
        message: "Registered Successfully"
    });
};

export const getUserDetails = async(req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        success: true,
        user,
    })
}
