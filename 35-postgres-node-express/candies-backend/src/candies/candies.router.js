const express = require('express');
const router = express.Router();
const controller = require('./candies.controller');

router.route('/')
  .get(controller.list);

module.exports = router;