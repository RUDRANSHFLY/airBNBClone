import jwt from "jsonwebtoken";
import { createError } from "./Error.js";
import { log } from "console";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;



    if (!token) {
        return next(createError(401, "You are not authenticated...!"));
    }

    jwt.verify(token, process.env.JWT, (error, user) => {
        if (error) {
            return next(createError(403, "Token is not valid...!"));
        }

        req.user = user;



        next();

    })
}



export const verfiyUser = (req, res, next) => {

    verifyToken(req, res, () => {

        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not Authorized....!"));
        }
    })
}



export const verfiyAdmin = (req, res, next) => {

    verifyToken(req, res, () => {

        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not Authorized....!"));
        }
    })
}

