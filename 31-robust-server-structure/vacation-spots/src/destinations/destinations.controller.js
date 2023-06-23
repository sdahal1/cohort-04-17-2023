const { destinations } = require('../data');
const { createId } = require('@paralleldrive/cuid2')

function list(req, res, next) {
  res.send({ data: destinations })
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

function destroy(req, res, next) {
  const { index } = res.locals;
  destinations.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  list,
  create: [
    validateDataExists,
    // ...['location', 'popularActivity', 'crowdLevel'].map(validator),
    validator('location'),
    validator('popularActivity'),
    validator('crowdLevel'),
    validateCrowdLevelIsNumeric,
    create
  ],
  read: [
    validateDestinationExists,
    read
  ],
  destroy: [
    validateDestinationExists,
    destroy
  ]
};