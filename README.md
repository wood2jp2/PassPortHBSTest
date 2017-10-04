A blogging platform built to build the excitement around Curb Your Enthusiasm Season 9. 

A simple, yet complex, app to the burgeoning junior developer. Here, a user is able to either a) create a new account, or b) log in to an 
already existing account. In order to implement passport user authentication, we actually had to break down our old, functioning app, and 
re-build it around the passport necessities. It was tough, but possible, and fun to figure out. Sequelize takes care of creating each 
new user, while passport encrypts the password and serializes the user as they sign in. Users are then able to navigate to the blogging page,
where they can view current posts, delete old posts, and add a new one. Express takes care of the HTTP requests, rendering blog / post data
as well. We tinkered with Grunt and Travis CI as well after deployment. This project was a wild ride of a few different technologies, up to
our final troubles deploying to heroku. Our UI is not the prettiest, but due to the time constraints, functionality was priority. Feel free 
to explore the app!

https://curb-your-comment.herokuapp.com/
