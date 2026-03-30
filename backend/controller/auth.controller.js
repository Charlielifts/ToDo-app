import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { createUser, finduserByEmail, finduserByUsername } from "../model/auth.model.js";

export const registerController = async (req, res) => {

    const { username, email, password } = req.body 

    try {
        //check user
        const existingUser = await finduserByEmail(email);
        if (existingUser) {
            return res.status(400).json({message: "Email already exist" });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        //create user
        const newUser = await createUser(username, email, password);

        req.status(201).json({
            message: "User Created" ,
            user: newUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error"});
    }
};

export const loginController = async (req, res) => {

    const{ username,password } = req.body

    try {
        //find user
        const user = finduserByUsername = await finduserByUsername(username);
        if(!user) {
            return res.status(400).json({message: "Invalid Username"})
        }
        //find pass
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "The password you entered is incorrect"})
        }
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,  
            { expiresIn: "1h" }
        );
        req.json({
            message: "Login sucessfull",
            token,
            user: {
                id: user.id,
                username: user.username,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "server error" });
    }

};