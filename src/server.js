var express = require("express");
var app = express();
const bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/songs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connect mongoose");
});
//Schema
var User = mongoose.model("User", {
  id: Number,
  name: String,
  favoriteSongs: String
});

app.use(bodyParser.urlencoded({ extended: true }));

// GET FROM DATABASE
app.get("/", function(req, res) {
  Recipe.find({}, function(err, results) {
    console.log(`get user ${JSON.stringify(results)}`)
    if (err)
       res.send(err);
    res.status(200).json(results);
  });
});

//ADD NEW
app.post("/new", function(req, res) {
  console.log(`new user ${JSON.stringify(req.body)}`)
  db.collection("users").insert(req.body, function(err, results) {
    console.log("new results", results);
    if (err)
       res.send(err);
    res.status(200).json(results);
  });
});

//UPDATE
// app.put("/users/", function(req, res) {
//   console.log("Inside put route: ", JSON.stringify(req.body));
//   Recipe.findByIdAndUpdate(req.body._id, req.body, function(err, updatedRecipe) {
//     console.log("updatedRecipe", updatedRecipe);
//     if (err)
//        res.send(err);
//       res.json(updatedRecipe);
//   });
// });

//DELETE
// app.delete("/song/:songId", function(req, res) {
//   console.log('delete body', req,body);
//   Recipe.remove({
//     _id: req.params.recipeId
//   }, function(err, recipe) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Recipe successfully deleted' });
//   });
// });

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
