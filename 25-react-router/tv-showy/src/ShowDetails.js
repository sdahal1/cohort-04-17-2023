import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Episodes from './Episodes';

function ShowDetails() {
  // we know that in the URL, we have the specific ID of the show we want to show the details about
  // so, here's the plan
  // access the ID of the show from the URL parameter
  // it's called id because of the path (in App.js)
  // const { id } = useParams();
  // make a request to the API to get details about that show
  const { url, path, params } = useRouteMatch();
  const { id } = params;
  console.log(url, path)
  const [showData, setShowData] = useState({});
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowData(data));
  }, [id])

  // save those details in a state variable
  // use that state variable to display data on the page
  return <div>
    <h3>{showData.name}</h3>
    <div>
      <Link to={url} className="btn btn-warning">Show Details</Link>
      <Link to={`${url}/episodes`} className="btn btn-warning">Episodes</Link>
    </div>
    <Switch>
      <Route path={path} exact={true}>
        {showData.image && <img src={showData.image.medium} />}
        <p>{showData.summary}</p>
      </Route>
      <Route path={`${path}/episodes`}>
        <Episodes />
      </Route>
    </Switch>

  </div>
}

export default ShowDetails;
