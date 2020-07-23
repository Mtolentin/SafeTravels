const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    address1: {
        type: String,
    },

    address2: {
        type: String,
    },

    latitude: {
        type: Number,
        required: true  
    },

    longitude: {
        type: Number,
        required: true  
    },

    rating: {
        type: Number,
        required: true
    },

    pictureURL: {
        type: String,
        required: true
    },

})
module.exports = Hotel = mongoose.model('Hotel', HotelSchema);