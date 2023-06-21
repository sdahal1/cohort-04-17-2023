const express = require('express');
const app = express();
const morgan = require('morgan');

// require in the book data so we can use it for CRUD
const books = require('./data/books.js');

// logging middleware - runs on every request that comes in
// instead of sending a response, we want to move on to the next handler function that Express can see
// by calling next()
// app.use('/', (req, res, next) => {
//   console.log(`request ${req.originalUrl} ${Date.now()}`)
//   next();
// })
app.use(morgan('dev'));
// this line makes it possible to make POST requests & read req.body
app.use(express.json());

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


// Book CRUD

function list(req, res, next) {
  res.send({ data: books });
}
function read(req, res, next) {
  // grab the book ID from the URL (and make it a number)
  const id = Number(req.params.id);
  // find the book from the books array that has that ID
  const book = books.find(b => b.id === id);
  // if we found the book,
  // send that book back in the response
  if (book) {
    res.send({ data: book });
  } else {
    // if we did not find the book, go into error handling, give a 404
    next({
      status: 404,
      message: `Could not find book with id ${req.params.id}`
    })
  }
}

function validateDataExists(req, res, next) {
  if (req.body.data) {
    next();
  } else {
    next({
      status: 400,
      message: "Request body must include a data object"
    })
  }
}

function validateAuthorExists(req, res, next) {
  if (req.body.data.author) {
    next();
  } else {
    next({
      status: 400,
      message: "Request body must include an author"
    })
  }
}

function makeValidatorFor(field) {
  return function (req, res, next) {
    if (req.body.data[field]) {
      next();
    } else {
      next({
        status: 400,
        message: `Request body must include ${field}`
      })
    }
  }
}

let nextId = 101;
function create(req, res, next) {
  // get the data from req.body that the user sent
  const { author, country, language, title } = req.body.data;
  // TODO: validate that data
  // package that data into an object
  const newBook = { author, country, language, title, id: nextId };
  // assign an ID to that object & increment the ID for next time
  nextId++;
  // add that object into our books array
  books.push(newBook);
  // send back the created object with a 201 Created status code
  res.status(201).send({ data: newBook })
}
app.get('/books', list);
app.get('/books/:id', read);
// let validators = ['author', 'country', 'language', 'title'].map(makeValidatorFor);
app.post('/books',
  validateDataExists,
  makeValidatorFor('author'),
  makeValidatorFor('country'),
  makeValidatorFor('language'),
  makeValidatorFor('title'),
  // ...validators,
  create);

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
