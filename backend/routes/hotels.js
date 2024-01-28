import expess from 'express';
import {
    createHotel,
    deleteHotel,
    getAllHotel,
    getHotel,
    updateHotel
} from '../controller/hotel.js';

const hotelRouter = expess.Router();
/**
 * ! CREATE
 */
hotelRouter.post("/", createHotel);
/**
 * ! UPDATE
 */
hotelRouter.put("/:id", updateHotel);
/**
 * ! DELETE
 */
hotelRouter.delete("/:id", deleteHotel);
/**
 * ! GET
 */
hotelRouter.get("/:id", getHotel);
/**
 * ! GET ALL 
 */
hotelRouter.get('/', getAllHotel);



export default hotelRouter;