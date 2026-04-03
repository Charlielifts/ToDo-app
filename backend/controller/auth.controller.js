import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { createUser, finduserByEmail, finduserByUsername } from "../model/auth.model.js";

export const registerController = async (req, res) => {
    console.log(req.body);
    const { username, email, password, } = req.body 
    

    try {
        //fill up fields
        if (!username || !email || !password) {
            return res.status(400).json({message: "Please fill up all the following fields"});
        }
        
        //check user
        const existingUser = await finduserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: "Username already exist. Please choose another"});
        }

        const existingEmail = await finduserByEmail(email);
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        console.log("CREATING USER...");
        //create user
        const newUser = await createUser(username, email, hashedPassword);

        res.status(201).json({
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
        //fill up fields
        if (!username || !password) {
            return res.status(400).json({message: "Please fill up all the following fields"});
        }
        //find user
        const user = await finduserByUsername(username);
        if(!user) {
            return res.status(400).json({message: "Invalid Username"})
        }
        //find pass
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "The password you entered is incorrect"})
        }   
        if (!user || !isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
        
        }
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,  
            { expiresIn: "1h" }
        );
        res.json({
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