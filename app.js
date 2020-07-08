require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");
const app = express();
// const path = require('path');

const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const uploads = require("./routes/api/uploads");


//LOCAL VERSION

// const db = require('./config/keys').mongoURI;
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello There!"));

// app.use(passport.initialize());
// require('./config/passport')(passport);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/api/users", users);
// app.use("/api/posts", posts);

// app.use("/api/document", uploads);

// // app.use(express.static(path.join(__dirname, "build")));

// const port = process.env.PORT || 4000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

// HEROKU VERSION

var http = require('http');         // For serving a basic web page.
var mongoose = require("mongoose"); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/HelloMongoose';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});