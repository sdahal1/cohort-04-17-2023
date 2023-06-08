import React from 'react';
import Bear from './Bear';

function BearsList({ allOfTheBears, deleteBear }) {
  return <div>
    {allOfTheBears.map(justOneBear => <Bear data={justOneBear} deleteBear={deleteBear} thing="a string" />)}
  </div>
}

export default BearsList;