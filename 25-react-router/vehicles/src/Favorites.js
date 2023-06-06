import React from 'react';

function Favorites({ favorites }) {
  return <main>
    <h2>Favorites Page</h2>
    {favorites.length > 0 ?
      favorites.map(f => <h4 key={f.Model_ID}>{f.Make_Name} {f.Model_Name}</h4>) :
      'You don\'t have any favorites yet. Search for a make on the homepage to get started!'}
  </main>
}

export default Favorites;
