const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Article = mongoose.model('Article', PostSchema);