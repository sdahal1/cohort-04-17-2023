import React from 'react';
import Show from './Show';

function SearchResults({ shows }) {
  return <div>
    <h2>Search Results</h2>
    {shows.map(show => <Show show={show} key={show.id} />)}
  </div>
}

export default SearchResults;
