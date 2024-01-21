import express from "express";
import dotenv from 'dotenv';




dotenv.config();



const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log('Backend is Connected...!');
    console.log(`APP IS RUNNINNG ON PORT ${PORT}`);
});

