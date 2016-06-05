"use-strict"

var express = require('express');
var router = express.Router();
var app = express();

app.use('/', require('./app/controllers/static'))



var port = process.env.PORT || 1805
var server = app.listen(port, function() {
    console.log('Magic happens at  ', port);
});