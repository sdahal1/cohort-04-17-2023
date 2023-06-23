const express = require('express');
const morgan = require('morgan');
const destinationsRouter = require('./destinations/destinations.router');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('this is the root route');
})

app.use('/destinations', destinationsRouter);

// 404 handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `page not found: ${req.originalUrl}`
  })
})

// error handling
// comes last so that it can handle errors from everything
app.use((error, req, res, next) => {
  console.log(error);
  const { status = 500, message = 'Internal server error' } = error;
  res.status(status).send({ error: message });
})

module.exports = app;
