import Room from "../model/Room.js";
import Hotel from "../model/Hotel.js";



/**
 * * CREATE ROOM Controller
 */
export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            });
        }
        catch (error) {
            next(error);
        }
        res.status(200).json(savedRoom);
    }
    catch (error) {
        next(error);
    }
};
/**
 * * UPDATE ROOM Controller
 */
export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
};
/**
 * * DELETE ROOM Controller
 */
export const deleteRoom = async (req, res, next) => {
    try {
        const hotelId = req.params.hotelId;
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            });
            await Room.findByIdAndDelete(req.params.id);
        }
        catch (error) {
            next(error);
        }
        res.status(200).json("Room has been Deleted....!");
    } catch (error) {
        next(error);
    }
};
/**
 * * GET ROOM Controller
 */
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}
/**
 * * GET ALL ROOM Controller
 */
export const getAllRooms = async (req, res, next) => {
    try {
        const allRooms = await Room.find();
        res.status(200).json(allRooms);
    } catch (error) {
        next(error);
    }
}

