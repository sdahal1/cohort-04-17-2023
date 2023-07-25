import React from 'react';

function Candy({ candy }) {
  return <div>
    <h2>{candy.candy_name}</h2>
    <h4>it is {candy.sweetness}/10 sweet</h4>
  </div>
}

export default Candy;