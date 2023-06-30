import React, { useState } from 'react';
import Candy from "./Candy";

function App() {
  const [candies, setCandies] = useState([{
    id: 1,
    name: 'mnms',
    sweetness: 9
  },
  {
    id: 2,
    name: 'snickers',
    sweetness: 7
  }])
  return (
    <div className="container">
      <h1>Candies!</h1>
      {candies.map(candy => <Candy candy={candy} key={candy.id} />)}
    </div>
  );
}

export default App;
