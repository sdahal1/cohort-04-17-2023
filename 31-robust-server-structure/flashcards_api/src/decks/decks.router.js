const express = require('express');
const router = express.Router();
const controller = require('./decks.controller');

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:deckId')
  .get(controller.read)
  .delete(controller.destroy);

module.exports = router;
