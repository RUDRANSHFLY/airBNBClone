import User from "../model/User.js";
import { generateEncryptedPassword } from "../utility/bcrypt.js";

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: generateEncryptedPassword(req.body.password),
        });

        await newUser.save();

        res.status(201).json("USER has been Created......!");


    } catch (error) {
        next(error);
    }
}