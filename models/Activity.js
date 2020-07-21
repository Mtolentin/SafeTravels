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

    beginDate: {
        type: String,
        required: true
    },
    
    endDate: {
        type: String,
        required: true
    },
})
module.exports = Activity = mongoose.model('Activity', ActivitySchema);