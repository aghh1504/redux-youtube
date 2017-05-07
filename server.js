const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const LocalStrategy = require('passport-local');
const User = require('./user')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/songs");

app.use(require('express-session')({
  secret: "Youtube website",
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(passport.initialize())
app.use(passport.session())

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connect mongoose");
});

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/register', function(req, res) {
  const user = new User({username: req.body.username, password: req.body.password});
  User.register(user, req.body.password, function(err) {

    if(err) {
      console.log(err);
    }
    passport.authenticate('local')(req, res, function() {
      res.status(200).json(user);
    })
  })

})

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
