require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const path = require('path');

const bodyParser = require('body-parser');
const passport = require('passport');

const hotels = require("./routes/api/hotels");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const restaurants = require("./routes/api/restaurants");
const uploads = require("./routes/api/uploads");
const activities = require("./routes/api/hotels");

//const products = require("./routes/api/products");


const articles = require("./routes/api/articles");

mongoose
.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/restaurants", restaurants);

app.use("/api/hotels", hotels);
app.use("/api/activities", activities);

app.use("/api/document", uploads);

app.use("/api/hotels", hotels);
app.use("/api/activities",activities);
app.use("/api/articles", articles);


//app.use("/api/products", products);
// app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));



