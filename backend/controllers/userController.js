import User from "../models/userModel.js";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({ name,email, password });

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json("Already registered")
        }

        await newUser.save();
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid email")
        }

        if (user.password !== password) {
            return res.status(400).json("Invalid password")
        }

        const token = jwt.sign({id : user._id, email : user.email}, "affaqkhan", {expiresIn : "4h"})

        return res.status(200).json({token})
    } catch (error) {
        return res.status(500).json(error)
    }
}

