var express = require('express');
var app = express.Router();
var Article = require("../models/Article.js");


// Route to get all saved articles.
app.get("/api/saved", function(req, res) {

    // We will find all the records, sort it in descending order, then limit the records to 5
    Article.find({}).limit(10).exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });
  
  // Main "/" Route. Redirects user to rendered React application.
  app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
  
  // Route to save articles from searches.
  app.post("/api/saved", function(req, res) {
    console.log("Article title: " + req.body.title);
    console.log("Article date: " + req.body.date);
    console.log("Article url: ") + req.body.url;
  
    // Save article.
    Article.create({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url
    }, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Saved Article");
      }
    });
  });
  
  // Route to delete saved article.
  app.delete("/api/saved/:id", function(req, res) {
  
    console.log("Article ID to delete: " + req.params.id);
  
    Article.findByIdAndRemove(req.params.id, function (err, response) {
      if(err){
        res.send("Delete didn't work: " + err);
      }
      res.send(response);
    });
  });


  module.exports = app;