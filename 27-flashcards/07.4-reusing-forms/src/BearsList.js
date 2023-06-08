import React from 'react';
import Bear from './Bear';

function BearsList({ allOfTheBears, deleteBear, editBear }) {
  return <div>
    {allOfTheBears.map((justOneBear, i) => <Bear data={justOneBear} deleteBear={deleteBear} editBear={editBear} index={i} />)}
  </div>
}

export default BearsList;