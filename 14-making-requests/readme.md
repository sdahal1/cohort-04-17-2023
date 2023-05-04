# Starter Code: Constellations Server

This server is intended to be run for some checkpoints in the Thinkful curriculum. If you have trouble getting the server to run, reach out to your mentor.

## Installation Instructions

First, verify that you have Node.js installed on your machine. Run the following two commands, which should successfully return version numbers.

```
node -v
npm -v
```

If those commands don't return version numbers, reference [npm's documetation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on how to install Node.js on your machine.

1. Fork this repository by clicking the Fork button at the top right of the page.
2. Clone this repository.
3. `cd` into the newly created directory.
4. Run `npm install`.
5. Run `npm start`.

Running `npm start` will spin up a server on port 5000.

## Description

The Constellations Server provides a RESTful API through which you can request and modify information about constellations.

In general, you should only need to access the routes described below.

### GET /constellations

Making a `GET` request to `/constellations` will return an array of objects, where each object is a constellation.

**Example Request**

```
GET http://localhost:5000/constellations
```

**Example Response**

```json
[
  {
    "id": "UEUrlfX",
    "name": "Columba",
    "meaning": "Dove",
    "starsWithPlanets": 3,
    "quadrant": "SQ1"
  },
  {
    "id": "zb8QvVt",
    "name": "Crater",
    "meaning": "Cup",
    "starsWithPlanets": 10,
    "quadrant": "SQ2"
  }
]
```

### GET /constellations/:id

Making a `GET` request to `/constellations/:id`, where `:id` is an ID of one of the constellations, will return a single object that represents the specified constellation.

If the constellation cannot be found by the ID, the server will return an error message of `404 Not found`.

**Example Request**

```
GET http://localhost:5000/constellations/UEUrlfX
```

**Example Response**

```json
{
  "id": "UEUrlfX",
  "name": "Columba",
  "meaning": "Dove",
  "starsWithPlanets": 3,
  "quadrant": "SQ1"
}
```

### POST /constellations

Making a `POST` request to `/constellations`, and including a request body, will return a single object that represents the newly created constellation.

There is no specific validation that is a part of the server, so you can create a record with any number of keys. Newly created records will automatically generate an ID.

**Example Request**

```
POST http://localhost:5000/constellations
{
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "SQ1"
}
```

**Example Response**

```json
{
  "id": "IVU9de",
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "SQ1"
}
```

### PUT /constellations/:id

Making a `PUT` request to `/constellations/:id`, where `:id` is the ID of a constellation, and including a request body, will _replace_ the existing constellation with the information included in the request body.

There is no specific validation that is a part of the server, so you can add whatever keys you want.

If the constellation cannot be found by the ID, the server will return an error message of `404 Not found`.

**Example Request**

```
PUT http://localhost:5000/constellations/IVU9de
{
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "NQ2"
}
```

**Example Response**

```json
{
  "id": "IVU9de",
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "NQ2"
}
```

### DELETE /constellations/:id

Making a `DELETE` request to `/constellations/:id`, where `:id` is the ID of a constellation, will remove the specified constellation from the collection. An empty object will be returned.

If the constellation cannot be found by the ID, the server will return an error message of `404 Not found`.

**Example Request**

```
DELETE http://localhost:5000/constellations/IVU9de
```

**Example Response**

```json
{}
```

## Tips

Making requests to the server may modify the data! If you want to reset your data back to its previous state, you can run the following command in this repository's folder.

```bash
git checkout db.json
```

This will effectively "undo" changes made to the database.
