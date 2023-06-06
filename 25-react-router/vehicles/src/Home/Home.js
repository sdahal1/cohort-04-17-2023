import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Home({ addFavorite }) {
  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (make) {
      async function fetchModels() {
        let response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`)
        let data = await response.json();
        setModels(data.Results)
      }
      fetchModels()
    }
  }, [make])

  function handleClick(model) {
    // save the model into our list of favorites
    addFavorite(model);
    // go to the favorites page
    history.push('/favorites');
  }
  return <main>
    <h3>Home Page</h3>
    <SearchForm setMake={setMake} />
    {models.map(model => <h4 key={model.Model_ID}>
      {model.Model_Name}
      <button onClick={() => handleClick(model)}>Add to Favorites</button>
    </h4>)}
  </main>
}

export default Home;
