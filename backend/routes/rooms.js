import express from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controller/room.js';
import { verfiyAdmin } from '../utility/verifyToken.js';





const roomRouter = express.Router();


/**
 * ! CREATE
 */
roomRouter.post('/:hotelId', verfiyAdmin, createRoom);
/**
 * ! UPDATE
 */
roomRouter.put("/:id", verfiyAdmin, updateRoom);
/**
 * ! DELETE
 */
roomRouter.delete("/:id/:hotelId", verfiyAdmin, deleteRoom);
/**
 * ! GET
 */
roomRouter.get('/:id', getRoom);
/**
 * ! GET - ALL
 */
roomRouter.get("/", getAllRooms);


export default roomRouter;