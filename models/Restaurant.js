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

    category: {
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