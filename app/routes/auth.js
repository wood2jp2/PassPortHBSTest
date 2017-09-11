var authController = require('../controllers/authcontroller.js');
var db = require('../models/user.js');

module.exports = function(app, passport) {

  app.get('/signup', authController.signup);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
  }));

  app.get('/signin', authController.signin);

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
  }));

  app.get('/dashboard', isLoggedIn, authController.dashboard);

  app.get('/logout', authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  };

  // app.post("/api/users", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     username: req.body.username,
  //     password: req.body.password,
  //     name: req.body.name,
  //     email: req.body.email
  //   }).then(function(results) {
  //     res.end();
  //   });
  // });

}
