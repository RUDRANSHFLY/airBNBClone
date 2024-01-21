import express from 'express';


const roomRouter = express.Router();


roomRouter.get('/', (req, res) => {
    res.send("This is room Endpoint..!");
})

export default roomRouter;