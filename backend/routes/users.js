import express from 'express';
import {
    createUser,
    deleteUser,
    getAllUser,
    getUser,
    updateUser
} from '../controller/user.js';


const userRouter = express.Router();
/**
 * ! CREATE
 */
userRouter.post("/", createUser);
/**
 * ! UPDATE
 */
userRouter.put("/:id", updateUser);
/**
 * ! DELETE
 */
userRouter.delete("/:id", deleteUser);
/**
 * ! GET
 */
userRouter.get("/:id", getUser);
/**
 * ! GET ALL 
 */
userRouter.get('/', getAllUser);

export default userRouter;