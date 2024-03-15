
import Hotel from '../model/Hotel.js';


/**
 * * CREATE hotel Controller
 */
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}
/**
 * * UPDATE hotel Controller
 */
export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error);
    }
}
/**
 * * DELETE hotel Controller
 */
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.body.id);
        res.status(200).json("Hotel has been Deleted....!");
    } catch (error) {
        next(error);
    }
}
/**
 * * GET hotel Controller
 */
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
}
/**
 * * GET-ALL hotel Controller
 */
export const getAllHotel = async (req, res, next) => {
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    } catch (error) {
        next(error);
    }
}
/**
 * * COUNT BY CITY hotel Controller
 */
export const countByCity = async (req, res, next) => {

    const cities = req.query.cities.split(",");
    try {
        const cityList = await Promise.all(cities.map((city) => {
            return Hotel.countDocuments({ city: city });
        }));
        res.status(200).json(cityList)
    } catch (error) {
        next(error);
    }
}
/**
 * * COUNT BY TYPE hotel Controller
 */
export const countByType = async (req, res, next) => {
    const type = req.query.types.split(",");
    try {
        const typeList = await Promise.all(type.map((type) => {
            return Hotel.countDocuments({ type: type })
        }));
        res.status(200).json(typeList);
    } catch (error) {
        console.log(error);
    }
}

