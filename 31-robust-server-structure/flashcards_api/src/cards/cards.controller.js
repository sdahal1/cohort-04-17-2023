// in the controller file, define & export the handler functions
// that will be used by the router

const cuid = require('cuid');
// Import data store
const { cards, decks } = require("../dataStore");
const logger = require('../utils/logger')

const list = (req, res, _next) => {
  if (req.params.deckId) {
    // we're in the nested route
    // filter by deck
    const { deckId } = req.params;
    // filter the cards down to just the relevant ones
    const filteredCards = cards.filter(c => c.deckId === deckId);
    // send those filtered cards back in the response
    res.send({ data: filteredCards })
  } else {
    // we're just at the /cards route
    // send all the cards
    res
      .json({ data: cards });
  }
};

const create = (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  }

  const { front, back, deckId } = data;

  // Validate required fields are present
  const requiredFields = ["front", "back", "deckId"];
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
};

// middleware
// either syntax is fine
// function validateCardExists(req, res, next) {}
const validateCardExists = (req, res, next) => {
  const { cardId } = req.params;
  const cardIndex = cards.findIndex(c => c.id === cardId);

  if (cardIndex === -1) {
    const message = `Card id ${cardId} does not exist`;
    return next({ status: 404, message });
  } else {
    // the card exists!
    // save info about the card into res.locals so that
    // the read and destroy functions can use that info
    res.locals.cardIndex = cardIndex;
    res.locals.card = cards[cardIndex];
    next();
  }
}

const read = (req, res, next) => {
  const { card } = res.locals;

  res.json({ data: card });
};

const destroy = (req, res, next) => {
  const { cardIndex } = res.locals;

  cards.splice(cardIndex, 1);
  res
    .status(204)
    .send();
};

module.exports = {
  list,
  create,
  read: [validateCardExists, read],
  destroy: [validateCardExists, destroy]
}
