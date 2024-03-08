import express from 'express';
import {
    createUser,
    deleteUser,
    getAllUser,
    getUser,
    updateUser
} from '../controller/user.js';
import { verfiyAdmin, verfiyUser, verifyToken } from '../utility/verifyToken.js';






const userRouter = express.Router();
/**
 * ! VERIFY USER AUTHENTICATION
 */
userRouter.get("/checkAuthentication", verifyToken, (req, res, next) => {
    res.send("Hello User u are Authenticated");
});
/**
 * ! VERIFY USER 
 */
userRouter.get("/checkUserAuthentication/:id", verfiyUser, (req, res, next) => {
    res.send("Hello User u are Logged In and have ACCESS to delete u r Account");
})
/**
 * ! VERIFY IS_ADMIN
 */
userRouter.get("/checkisAdmin/:id", verfiyAdmin, (req, res, next) => {
    res.send("Hello Admin u are logged in and have aceess to delete u r account and all acounts also");
});
/**
 * ! CREATE
 */
userRouter.post("/", createUser);
/**
 * ! UPDATE
 */
userRouter.put("/:id", verfiyUser, updateUser);
/**
 * ! DELETE
 */
userRouter.delete("/:id", verfiyUser, deleteUser);
/**
 * ! GET
 */
userRouter.get("/:id", verfiyUser, getUser);
/**
 * ! GET ALL 
 */
userRouter.get('/', verfiyAdmin, getAllUser);

export default userRouter;