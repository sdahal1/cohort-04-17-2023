import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './Episodes.css';

function Episodes() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(response => response.json())
      .then(data => setEpisodes(data));
  }, [id])
  return <div>
    <h3>Episodes</h3>
    {episodes.map(ep => <div key={ep.id} className="episode">
      <h4>Season {ep.season} Episode {ep.number}: {ep.name}</h4>
      <p>Aired on {ep.airdate}</p>
      {ep.image && <img src={ep.image.medium} />}
      <div dangerouslySetInnerHTML={{ __html: ep.summary }}></div>
    </div>)}
  </div>
}

export default Episodes;
