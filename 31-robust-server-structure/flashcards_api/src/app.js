const express = require("express");
const morgan = require("morgan");

const app = express();

const logger = require('./utils/logger')

// -- PIPELINE STARTS HERE ---

// Middleware
app.use(morgan("common"));
app.use(express.json());

// Routes

// mount the cards router
const cardsRouter = require('./cards/cards.router')
app.use('/cards', cardsRouter);
// mount the decks router
const decksRouter = require('./decks/decks.router');
app.use('/decks', decksRouter);


// 404 handler
// by putting it after all of our routers, this will only happen
// if none of the routes in the routers were hit
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`
  })
})

// Error Handler
app.use(function errorHandler(error, req, res, _next) {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  logger.error(message);

  res
    .status(status)
    .json({ error: message });
});

module.exports = app;