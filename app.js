"use-strict"

var express = require('express');
var router = express.Router();
var app = express();
var path = require('path')


app.set('views', __dirname + '/public/views/partials')
app.set('view engine', 'jade')
app.use(express.static(path.resolve('public/assets/')))
app.get('/', function(req, res) {
    res.render('landing', { title: 'Home' })
});
app.get('/projects', function(req, res) {
    res.render('projects')
});
app.get('/about', function(req, res) {
    res.render('about')
});
app.get('/contact', function(req, res) {
    res.render('contact')
});
app.use(function(req, res, next) {
  res.render('404')
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.render('500')
});
var port = process.env.PORT || 1339
var server = app.listen(port, function() {
    console.log('Magic happens at  ', port);
});
