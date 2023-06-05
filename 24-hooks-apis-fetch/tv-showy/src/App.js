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
  useEffect(() => {
    // step 3: make the request & save the data from the response into the state variable
    const abortController = new AbortController();
    fetch('https://api.tvmaze.com/shows', { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(e => {
        if (e.name === 'AbortError') {
          // this was the expected error, log it and carry on
          console.log('Aborted')
        } else {
          throw e;
        }
      });
    return () => {
      abortController.abort();
    }
  }, [])

  // or, with async/await
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   async function fetchShows() {
  //     try {
  //       let response = await fetch('https://api.tvmaze.com/shows', { signal: abortController.signal });
  //       let data = await response.json();
  //       setShows(data);
  //     } catch (e) {
  //       if (e.name === 'AbortError') {
  //         // this was the expected error, log it and carry on
  //         console.log('Aborted')
  //       } else {
  //         throw e;
  //       }
  //     }
  //   }
  //   fetchShows();
  //   return () => {
  //     // code inside of this function gets run only if we need to clean up
  //     // so, if we need to clean up, we should abort the fetch
  //     abortController.abort();
  //   }
  // }, [])

  return (
    <div>
      <h1 onClick={() => setClicks(clicks + 1)} onMouseOver={() => setMouseOvers(mouseOvers + 1)}>TV Showy {clicks} {mouseOvers}</h1>
      {shows.map(show => <Show show={show} key={show.id} />)}
    </div>
  );
}

export default App;
