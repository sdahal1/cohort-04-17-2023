import React, { useEffect, useState } from 'react';
import Candy from "./Candy";
import CreateCandyForm from './CreateCandyForm';

function App() {
  const [candies, setCandies] = useState([])
  const fetchCandies = () => {
    fetch('http://localhost:8080/candies')
      .then(response => response.json())
      .then(resData => setCandies(resData.data))
  }
  useEffect(fetchCandies, [])

  return (
    <div className="container">
      <h1>Candies!</h1>
      <CreateCandyForm fetchCandies={fetchCandies} />
      {candies.map(candy => <Candy candy={candy} key={candy.id} />)}
    </div>
  );
}

export default App;
