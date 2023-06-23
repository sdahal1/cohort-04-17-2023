// in the router file, assign the route handlers to routes

const express = require('express');
// mergeParams allows accessing route params from the nested route
const router = express.Router({ mergeParams: true });
const controller = require('./cards.controller')

const methodNotAllowed = require('../utils/methodNotAllowed');

router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router.route('/:cardId')
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed);

module.exports = router;
