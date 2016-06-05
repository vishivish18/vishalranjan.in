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
var port = process.env.PORT || 1805
var server = app.listen(port, function() {
    console.log('Magic happens at  ', port);
});
