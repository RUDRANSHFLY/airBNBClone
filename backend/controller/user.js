import User from "../model/User.js";


/**
 * * CREATE USER Controller
 */
export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        next(error);
    }
}
/**
 * * UPDATE USER Controller
 */
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}
/**
 * * DELETE USER Controller
 */
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.body.id);
        res.status(200).json("User has been Deleted....!");
    } catch (error) {
        next(error);
    }
}
/**
 * * GET USER Controller
 */
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
/**
 * * GET-ALL hotel Controller
 */
export const getAllUser = async (req, res, next) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
}