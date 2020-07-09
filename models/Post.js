const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // username:{
  //   type: String,
  //   required: true
  // },
  author: {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    username: String
  },  
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('Post', PostSchema);