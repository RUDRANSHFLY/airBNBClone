import mongoose from "mongoose";




const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    distances: {
        type: String,
        required: true,
    },

    photos: {
        type: [String],
    },

    desc: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },

    rooms: {
        type: [String],
        required: true,
    },

    cheapestRoom: {
        type: Number,
        required: true,
    },

    featured: {
        type: Boolean,
        required: true,
        default: false,
    }

}, {
    timestamps: true
});


export default mongoose.model("Hotel", hotelSchema);