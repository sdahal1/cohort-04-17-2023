import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Show({ show }) {
  return <div>
    <Link to={`/tvshows/${show.id}`}><h3>{show.name}</h3></Link>
    {show.image && <img src={show.image.medium} />}
    <p>Genres: {show.genres.join(', ')}</p>
  </div>
}

export default Show;