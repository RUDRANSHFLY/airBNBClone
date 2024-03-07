import express from "express";
import cookieParser from "cookie-parser";
import makeDataBaseConnection from "./database/data.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import roomRouter from "./routes/rooms.js";
import hotelRouter from "./routes/hotels.js";








const app = express();
const PORT = 5000;



/**
 * * MIDDELWARES
 */

app.use(cookieParser());

app.use(express.json());

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
});






app.use('/api/auth', authRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/user', userRouter);
app.use('/api/room', roomRouter);




app.listen(PORT, () => {
    console.log('Backend is Connected...!');
    console.log(`APP IS RUNNINNG ON PORT ${PORT}`);
    makeDataBaseConnection();
});


