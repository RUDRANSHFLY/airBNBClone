import User from "../model/User.js";
import { createError } from "../utility/Error.js";
import { checkPassword, generateEncryptedPassword } from "../utility/bcrypt.js";
import jwt from 'jsonwebtoken';



/**
 * * CREATE user Controller
 */
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

/**
 * * LOG-IN user Controller
 */

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });


        if (!user) {
            return next(createError(404, "User not found"))
        }

        const checkPasswordValidation = await checkPassword(req.body.password, user.password);



        if (!checkPasswordValidation) {
            return next(createError(
                400,
                "Wrong password or username......!"
            ))
        }



        const { password, isAdmin, ...otherDetails } = user._doc;



        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT
        )


        res.cookie(
            "access_token",
            token,
            {
                httpOnly: true,
            }
        ).status(200).json({ ...otherDetails });

    } catch (error) {
        next(error);
    }
}