import React from 'react';

function Show({ show }) {
  return <div>
    <h3>{show.name}</h3>
    <img src={show.image.medium} />
    <p>Genres: {show.genres.join(', ')}</p>
  </div>
}

export default Show;