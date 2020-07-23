const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
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
module.exports = Activity = mongoose.model('Activity', ActivitySchema);