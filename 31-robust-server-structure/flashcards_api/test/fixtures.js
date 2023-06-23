exports.makeDecks = () => ([
  {
    "id": "cko50i9vh00007zmnh6b01hsl",
    "name": "Rendering in React",
    "description": "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. "
  },
  {
    "name": "React Router",
    "description": "React Router is a collection of navigational components that compose declaratively with your application.",
    "id": "cko50ifsx00017zmnhbcx2lk7"
  }
]);

exports.makeCards = () => ([
  {
    "id": "cko50ir4300027zmnaopmd0fu",
    "front": "Differentiate between Real DOM and Virtual DOM.",
    "back": "Virtual DOM updates are faster but do not directly update the HTML",
    "deckId": "cko50i9vh00007zmnh6b01hsl"
  },
  {
    "id": "cko50ix2s00037zmnfomv4e76",
    "front": "How do you modify the state of a different React component?",
    "back": "Not at all! State is visible to the component only.",
    "deckId": "cko50i9vh00007zmnh6b01hsl"
  },
  {
    "id": "cko50j6ir00047zmn7u1c9w33",
    "front": "How do you pass data 'down' to a React child component?",
    "back": "As properties or props",
    "deckId": "cko50i9vh00007zmnh6b01hsl"
  },
  {
    "front": "What path will match the follow Route?\n<Route>\n  <NotFound />\n</Route>",
    "back": "All paths. A route with no path matches all URL's",
    "deckId": "cko50ifsx00017zmnhbcx2lk7",
    "id": "cko50jc9y00057zmn1235bk74"
  },
  {
    "front": "What does <Switch> do?",
    "back": "Renders the first matching child <Route> ",
    "deckId": "cko50ifsx00017zmnhbcx2lk7",
    "id": "cko50jhwh00067zmnb7x60n4y"
  }
]);
