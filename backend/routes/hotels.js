import expess from 'express';
import {
    createHotel,
    deleteHotel,
    getAllHotel,
    getHotel,
    updateHotel
} from '../controller/hotel.js';
import { verfiyAdmin } from '../utility/verifyToken.js';

const hotelRouter = expess.Router();
/**
 * ! CREATE
 */
hotelRouter.post("/", verfiyAdmin, createHotel);
/**
 * ! UPDATE
 */
hotelRouter.put("/:id", verfiyAdmin, updateHotel);
/**
 * ! DELETE
 */
hotelRouter.delete("/:id", verfiyAdmin, deleteHotel);
/**
 * ! GET
 */
hotelRouter.get("/:id", getHotel);
/**
 * ! GET ALL 
 */
hotelRouter.get('/', getAllHotel);



export default hotelRouter;