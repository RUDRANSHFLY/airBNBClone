import expess from 'express';
import {
    countByCity,
    countByType,
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
hotelRouter.get("/find/:id", getHotel);
/**
 * ! GET ALL 
 */
hotelRouter.get('/', getAllHotel);
/**
 * ! COUNT BY CITY  
 */
hotelRouter.get('/countByCity', countByCity);
/**
 * ! COUNT BY TYPE  
 */
hotelRouter.get("/countByType", countByType);



export default hotelRouter;