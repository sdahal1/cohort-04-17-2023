import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Show from './Show';

function App() {
  let [clicks, setClicks] = useState(0);
  let [mouseOvers, setMouseOvers] = useState(0);
  useEffect(() => {
    document.title = `${Date.now()} is now`
  }, []);

  // making a request to an API for data
  // step 1: a state variable to hold the data
  const [shows, setShows] = useState([]);
  // step 2: a useEffect to make the request (don't forget a dependency array!)
  // useEffect(() => {
  //   // step 3: make the request & save the data from the response into the state variable
  //   fetch('https://api.tvmaze.com/shows')
  //     .then(response => response.json())
  //     .then(data => setShows(data));
  // }, [])

  // or, with async/await
  useEffect(() => {
    async function fetchShows() {
      let response = await fetch('https://api.tvmaze.com/shows');
      let data = await response.json();
      setShows(data);
    }
    fetchShows();
  }, [])

  return (
    <div>
      <h1 onClick={() => setClicks(clicks + 1)} onMouseOver={() => setMouseOvers(mouseOvers + 1)}>TV Showy {clicks} {mouseOvers}</h1>
      {shows.map(show => <Show show={show} key={show.id} />)}
    </div>
  );
}

export default App;
