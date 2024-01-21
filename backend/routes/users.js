import express from 'express';


const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("This is user Endpoint..!");
});

export default userRouter;