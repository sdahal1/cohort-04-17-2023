const express = require('express');
const router = express.Router();
const controller = require('./destinations.controller');
const methodNotAllowed = require('../utils/methodNotAllowed');


router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router.route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed);

module.exports = router;
