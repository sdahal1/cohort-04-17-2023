const express = require('express');
const app = express();
const morgan = require('morgan');

// logging middleware - runs on every request that comes in
// instead of sending a response, we want to move on to the next handler function that Express can see
// by calling next()
// app.use('/', (req, res, next) => {
//   console.log(`request ${req.originalUrl} ${Date.now()}`)
//   next();
// })
app.use(morgan('dev'));

// middleware function to celebrate potato requests
function celebratePotato(req, res, next) {
  console.log('hooray for potatoes');
  next();
}

// route handlers
// listen for requests at a specific route and send back a response to that request
// the callback takes in 3 params: request info, response info, next function
app.get('/', (req, res, next) => {
  console.log('a request came in to the root route');
  res.send('this is the BEST root route');
})

app.get('/potato', celebratePotato, (req, res, next) => {
  res.send('what\'s taters, precious??');
});


// route-level middleware: validate that the genre exists
// makes our code DRY
function validateGenreExists(req, res, next) {
  if (req.query.genre) {
    next();
  } else {
    next({
      status: 400,
      message: 'must include a genre query parameter'
    })
  }
}
// book info - let's practice query parameters
app.get('/book-info', validateGenreExists, (req, res, next) => {
  // http://localhost:5000/book-info?title=To%20Kill%20A%20Mockingbird&author=Harper%20Lee
  // let title = req.query.title;
  let { title = 'no title given', author, genre } = req.query;
  res.send(`${title} is a ${genre.toLowerCase()} book by ${author}`);
})

app.get('/echo', validateGenreExists, (req, res, next) => {
  res.send(req.query);
})

app.get('/books/recent', (req, res, next) => {
  res.send(`You have read Gideon the Ninth recently`);
})

// route parameters
app.get('/books/:book_title', (req, res, next) => {
  // route parameters live inside of req.params
  res.send(`you requested the book ${req.params.book_title}`);
})


// app.use does fuzzy/inexact matches - so this will match ANYTHING that starts with /
// we will use this for a 404 handler - if the user tries to go anywhere else, give them back a 404
app.use('/', (req, res, next) => {
  // trigger error handling
  // call next function and pass in an argument
  // that argument will show up as the value of the error param in the error handling function
  next({
    status: 404,
    message: `page not found: ${req.originalUrl}`
  })
})

// error handling
// comes last so that it can handle errors from everything

app.use((error, req, res, next) => {
  // log the error so that I, the developer, can see what went wrong
  console.log(error);
  const { status = 500, message = 'Internal server error' } = error;
  // send a nice message back to the client so they don't get confused
  res.status(status).send(message);
})

module.exports = app;
