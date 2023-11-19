// Create web server
var express = require('express');
var router = express.Router();
var path = require('path');

// Get the database
var db = require('../db');

// Get the comments collection
var comments = db.get('comments');

// Get the home page
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

// Get the comments from the database
router.get('/comments', function(req, res, next) {
  comments.find({}, function(err, comments) {
    if (err) throw err;
    res.json(comments);
  });
});