const knex = require('../db/connection')

function list(req, res, next) {
  knex
    .table('candies')
    .select('*')
    .then(candies => res.send({ data: candies }));
}
function create(req, res, next) {
  knex
    .table('candies')
    .insert({
      candy_name: req.body.data.candy_name,
      sweetness: req.body.data.sweetness
    })
    .then(candyData => res.send({ data: candyData }))
}

module.exports = {
  list,
  create
}
