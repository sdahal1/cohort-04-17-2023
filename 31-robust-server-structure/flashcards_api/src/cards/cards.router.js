// in the router file, assign the route handlers to routes

const express = require('express');
const router = express.Router();
const controller = require('./cards.controller')

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:cardId')
  .get(controller.read)
  .delete(controller.destroy);

module.exports = router;
