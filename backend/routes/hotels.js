import expess from 'express';

const hotelRouter = expess.Router();


hotelRouter.get('/', (req, res) => {
    res.send("This is hotel Endpoint..!");
});

export default hotelRouter;