const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true  
    },
    link1: {
        type: String
    },
    link2: {
        type: String
    },
    keyword1: {
        type: String
    },
    keyword2: {
        type: String
    }
})
module.exports = Post = mongoose.model('Product', ProductSchema);