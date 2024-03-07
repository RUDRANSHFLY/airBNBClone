import express from "express";
import { login, register } from "../controller/auth.js";

const authRouter = express.Router();

/**
 * ! REGISTER
 */
authRouter.post('/register', register);
/**
 * ! LOG-IN
 */
authRouter.post('/login', login);



export default authRouter;
