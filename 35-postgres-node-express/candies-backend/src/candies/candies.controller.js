const knex = require('../db/connection')

function list(req, res, next) {
  knex
    .table('candies')
    .select('*')
    .then(candies => res.send({ data: candies }));
}

module.exports = {
  list
}
