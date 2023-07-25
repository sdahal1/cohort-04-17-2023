const { destinations } = require('../data');
const { createId } = require('@paralleldrive/cuid2')
const knex = require('../db/connection')

function list(req, res, next) {
  // res.send({ data: destinations })
  knex('destinations')
    .select('*')
    .then(dataFromDb => res.send({ data: dataFromDb }))
}

function validateDataExists(req, res, next) {
  if (req.body.data) {
    next();
  } else {
    next({
      status: 400,
      message: "request body must contain a data object"
    })
  }
}

function validator(field) {
  return function (req, res, next) {
    if (req.body.data[field]) {
      next();
    } else {
      next({
        status: 400,
        message: `you forgot the ${field} field`
      })
    }
  }
}

function validateCrowdLevelIsNumeric(req, res, next) {
  let { crowdLevel } = req.body.data;
  if (typeof crowdLevel === 'number' && crowdLevel >= 1 && crowdLevel <= 10) {
    next();
  } else {
    next({
      status: 400,
      message: `crowdLevel must be a number between 1 and 10`
    })
  }
}

function create(req, res, next) {
  // generate an id
  // make an object using the request body
  let newDestination = {
    id: createId(),
    location: req.body.data.location,
    popularActivity: req.body.data.popularActivity,
    crowdLevel: req.body.data.crowdLevel
  };
  // save that object into my array
  destinations.push(newDestination);
  // send it back with a 201 status code
  res.status(201).send({ data: newDestination });
}

function validateDestinationExists(req, res, next) {
  const { id } = req.params;
  const index = destinations.findIndex(d => d.id === id);
  if (index < 0) {
    next({
      status: 404,
      message: `no destination with id ${id}`
    })
  } else {
    res.locals.index = index;
    res.locals.destination = destinations[index]
    next();
  }
}

function read(req, res, next) {
  res.send({ data: res.locals.destination });
}

function update(req, res, next) {
  // pull data to be updated out of the request body
  const { location, popularActivity, crowdLevel } = req.body.data;
  const { index, destination } = res.locals;
  // update the existing destination based on that data
  const updatedDestination = {
    ...destination,
    location,
    popularActivity,
    crowdLevel
  }
  destinations[index] = updatedDestination;
  // send the updated destination in the response
  res.send({ data: updatedDestination });
}

function destroy(req, res, next) {
  const { index } = res.locals;
  destinations.splice(index, 1);
  res.status(204).send();
}

const fieldValidators = ['location', 'popularActivity', 'crowdLevel'].map(validator);
module.exports = {
  list,
  create: [
    validateDataExists,
    // ...['location', 'popularActivity', 'crowdLevel'].map(validator),
    // validator('location'),
    // validator('popularActivity'),
    // validator('crowdLevel'),
    ...fieldValidators,
    validateCrowdLevelIsNumeric,
    create
  ],
  read: [
    validateDestinationExists,
    read
  ],
  update: [
    validateDestinationExists,
    validateDataExists,
    ...fieldValidators,
    validateCrowdLevelIsNumeric,
    update
  ],
  destroy: [
    validateDestinationExists,
    destroy
  ]
};