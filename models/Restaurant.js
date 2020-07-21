const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
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
        required: true
    },

    address2: {
        type: String,
        required: true
    },

    latitude: {
        type: Number,
        required: true  
    },

    longitude: {
        type: Number,
        required: true  
    },

    pictureURL: {
        type: String,
        required: true
    },

    link1: {
        type: String,
        required: true
    },

    link2: {
        type: String,
    },
})
module.exports = Restaurant = mongoose.model('Restaurant', RestaurantSchema);