"use-strict"

var express = require('express');
var router = express.Router();
var app = express();
var path = require('path')


app.set('views', __dirname + '/public/views/partials')
app.set('view engine', 'jade')
app.use(express.static(path.resolve('public/assets/')))
app.use('/resume', express.static(__dirname + '/resume/'));

app.get('/', function(req, res) {
    res.render('landing', { title: 'Vishal Ranjan | #Developer #Dreamer #Musician #Traveller #Reader #Writer' })
});
app.get('/projects', function(req, res) {
    res.render('projects',{title: 'Projects | Vishal Ranjan'})
});
app.get('/projects/mka', function(req, res) {
    res.render('./projects/mka',{title: 'Projects | MKA'})
});
app.get('/projects/open-flush', function(req, res) {
    res.render('./projects/openflush',{title: 'Projects | Open Flush'})
});
app.get('/projects/sanepharma', function(req, res) {
    res.render('./projects/sanepharma',{title: 'Projects | Sanepharma'})
});
app.get('/projects/mean-machine', function(req, res) {
    res.render('./projects/meanmachine',{title: 'Projects | Mean Machine'})
});
app.get('/projects/trail-tracker', function(req, res) {
    res.render('./projects/trailtracker',{title: 'Projects | Trail Tracker'})
});
app.get('/projects/ultimate-tic-tac-toe', function(req, res) {
    res.render('./projects/tictactoe',{title: 'Projects | Ultimate Tic Tac Toe'})
});
app.get('/projects/snakes-and-ladders', function(req, res) {
    res.render('./projects/snakesladders',{title: 'Projects | Snakes and Ladders'})
});
app.get('/about', function(req, res) {
    res.render('about',{title: 'About Me | Vishal Ranjan'})
});
app.get('/contact', function(req, res) {
    res.render('contact')
});
app.get('/tech', function(req, res) {
    res.render('tech',{title: 'Tech Stack | Vishal Ranjan'})
});
app.get('/blog', function(req, res) {
    res.redirect('http://www.codelikeapainter.com')
});
app.use(function(req, res, next) {
  res.render('404',{title: 'Oops ! | Vishal Ranjan'})
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.render('500')
});
var port = process.env.PORT || 1339
var server = app.listen(port, function() {
    console.log('Magic happens at  ', port);
});
