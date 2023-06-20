const express = require('express');
const app = express();

// logging middleware - runs on every request that comes in
// instead of sending a response, we want to move on to the next handler function that Express can see
// by calling next()
app.use('/', (req, res, next) => {
  console.log(`request ${req.originalUrl} ${new Date().toString()}`)
  next();
})

// route handlers
// listen for requests at a specific route and send back a response to that request
// the callback takes in 3 params: request info, response info, next function
app.get('/', (req, res, next) => {
  console.log('a request came in to the root route');
  res.send('this is the BEST root route');
})

app.get('/potato', (req, res, next) => {
  res.send('what\'s taters, precious??');
})


// app.use does fuzzy/inexact matches - so this will match ANYTHING that starts with /
app.use('/', (req, res, next) => {
  res.send('this is the app.use version of the root route');
})

module.exports = app;
