const
  express = require('express'),
  path = require('path'),
  app = express();

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/home');
  });

  app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'))
  });

  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/signup.hbs'))
  });

  app.get('signin', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/signin'))
  });

  app.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/dashboard.hbs'))
  });

  app.get('/post', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/post.html'))
  });

  app.get('/logout', function(req, res) {
    res.redirect('/home');
  });
};
