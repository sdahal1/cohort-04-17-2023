import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { Route } from 'react-router-dom'
import Favorites from './Favorites';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);
  function addFavorite(newFavorite) {
    setFavorites([...favorites, newFavorite]);
  }
  return (
    <div className="App">

      <h1>My Vehicle Finder</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">My Favorites</Link>
      </nav>
      <Route path="/" exact>
        <Home addFavorite={addFavorite} />
      </Route>
      <Route path="/favorites">
        <Favorites favorites={favorites} />
      </Route>
    </div>
  );
}

export default App;
