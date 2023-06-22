const express = require("express");
const morgan = require("morgan");
const winston = require("winston");
const cuid = require("cuid");

const app = express();

// Create a logger output to "info.log" file
const fileLogger = new winston.transports.File({ filename: "info.log" });
const consoleLogger = new winston.transports.Console({ format: winston.format.simple() });

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [ fileLogger ],
});

// If running tests, remove file logger and output to console instead
if (process.env.NODE_ENV === "test") {
  logger.remove(fileLogger);
  logger.add(consoleLogger);
  consoleLogger.level = "crit";
}

// Import data store
const { cards, decks } = require("./dataStore");

// Utility function to delete items from any provided collection by id
function deleteItem(collection, id) {
  const itemIndex = collection.findIndex(i => i.id === id);
  if (itemIndex > -1) {
    collection.splice(itemIndex, 1);
  }
}

// -- PIPELINE STARTS HERE ---

// Middleware
app.use(morgan("common"));
app.use(express.json());

// Routes
app.get("/cards", (_req, res, _next) => {
  res
    .json({ data: cards });
});

app.post("/cards", (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  }

  const { front, back, deckId } = data;

  // Validate required fields are present
  const requiredFields = ["front","back","deckId"];
  for (const field of requiredFields) {
    if (!data[field]) {
      const message = `'${field}' is required`;
      return next({ status: 400, message });
    }
  }

  // Validate deck exists
  const deck = decks.find(d => d.id === deckId);
  if (!deck) {
    const message = `Deck id ${deckId} does not exist.`;
    return next({ status: 400, message });
  } 

  // Create an ID
  const id = cuid();

  const card = {
    id,
    front,
    back,
    deckId,
  };

  cards.push(card);
  logger.info(`Card with id ${id} created`);

  res
    .status(201)
    .json({ data: card });
});

app.get("/cards/:cardId", (req, res, next) => {
  const { cardId } = req.params;
  const card = cards.find(c => c.id === cardId);

  // make sure we found a card
  if (!card) {
    const message = `Card with id ${cardId} not found.`;
    return next({ status: 404, message });
  }

  res.json({ data: card });
});

app.delete("/cards/:cardId", (req, res, next) => {
  const { cardId } = req.params;
  const cardIndex = cards.findIndex(c => c.id === cardId);

  if(cardIndex === -1) {
    const message = `Card id ${cardId} does not exist`;
    return next({ status: 404, message });
  }

  cards.splice(cardIndex, 1);
  res
    .status(204)
    .send();
});

app.get("/decks", (req, res, _next) => {
  res
    .json({ data: decks });
});

app.post("/decks", (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  }

  const { name, description } = data;

  const requiredFields = ["name", "description"];
  for (const field of requiredFields) {
    if (!data[field]) {
      const message = `'${field}' is required`;
      return next({ status: 400, message });
    }
  }

  // get an id
  const id = cuid();

  const deck = {
    id,
    name,
    description,
  };

  decks.push(deck);

  logger.info(`Deck with id ${id} created`);

  res
    .status(201)
    .json({ data: deck });
});

app.get("/decks/:deckId", (req, res, next) => {
  const { deckId } = req.params;
  const deck = decks.find(d => d.id === deckId);

  // make sure we found a list
  if (!deck) {
    const message = `Deck with id ${deckId} not found.`;
    return next({ status: 404, message });
  }

  res.json({ data: deck });
});

app.delete("/decks/:deckId", (req, res, next) => {
  const { deckId } = req.params;

  const deckIndex = decks.findIndex(d => d.id === deckId);

  if (deckIndex === -1) {
    const message = `Deck with id ${deckId} not found.`; 
    return next({ status: 404, message });
  }

  // Delete deck
  deleteItem(decks, deckId);
  // Delete all cards in deck
  cards
    .filter(c => c.deckId === deckId)
    .forEach(c => deleteItem(cards, c.id));

  logger.info(`Deck with id ${deckId} deleted.`);
  res
    .status(204)
    .end();
});

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