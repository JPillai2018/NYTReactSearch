'use strict'
//  Dependencies
const express = require("express");
const bodyParser = require("body-parser");
//const logger = require("morgan");
const mongoose = require("mongoose");
//const routes = require("./routes");

// Require Article Schema
//const Article = require("./models/Article");

// Create Instance of Express
const app = express();
// Sets an initial port.
const PORT = process.env.PORT || 8082;
// Run Morgan for Logging
//app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// ------------------------------------------------- 
// Require the routes in controllers
var routes = require("./controllers/articlecontroller.js");
app.use('/', routes);
//--------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
//mongoose.connect("mongodb://heroku_41njf0v6:ho7mjcv4ejq4etq0nsce6qcbka@ds135532.mlab.com:35532/heroku_41njf0v6");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NYTArticle");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listener.
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
