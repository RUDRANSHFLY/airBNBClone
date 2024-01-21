import mongoose from "mongoose";
import dotenv from 'dotenv';




dotenv.config();

const makeDataBaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Database is Connected..!");
    } catch (error) {
        console.error(error);
    }

    mongoose.connection.on("disconnected", () => {
        console.log("mongoDB Disconnected..!");
    });

    mongoose.connection.on("connected", () => {
        console.log("mongoDB Connected..!");
    })

}


export default makeDataBaseConnection;
