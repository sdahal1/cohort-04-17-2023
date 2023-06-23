const express = require('express');
const router = express.Router();
const controller = require('./decks.controller');
const cardsRouter = require('../cards/cards.router')
const methodNotAllowed = require('../utils/methodNotAllowed');

router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)

router.route('/:deckId')
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed)

// version 1 of nested routes
// router.route('/:deckId/cards')
//   .get(controller.listCards)
//   .all(methodNotAllowed);

// version 2 of nested routes
// downside: we need to modify the cards controller to make sure 
// our route handlers can deal with filtering by deck
// we also need to modify the cards router, adding mergeParams
router.use('/:deckId/cards', cardsRouter);

module.exports = router;
