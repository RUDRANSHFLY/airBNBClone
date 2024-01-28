import express from "express";
import makeDataBaseConnection from "./database/data.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import roomRouter from "./routes/rooms.js";
import hotelRouter from "./routes/hotels.js";








const app = express();
const PORT = 5000;


app.use(express.json());

app.use((err, req, res, next) => {

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


