import express from "express";

const authRouter = express.Router();


authRouter.get('/', (req, res) => {
    res.send("This is auth Endpoint..!")
});



export default authRouter;
