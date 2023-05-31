import React from 'react';
import './Snack.css';

function Snack({ snack, setFavorite }) {
  // let greeting = "hello!!";
  // let bool = false;
  // ternaries are WTF: WHAT ? true : false
  let { name, imageUrl } = snack;
  let handleClick = () => {
    console.log('favoriting snack', snack);
    setFavorite(snack);
  }
  return <p>
    <img src={imageUrl} alt={name} />
    Snack: {name} {' '}
    {name === 'Popcorn' ? <small className="btn btn-danger">the best snack</small> : <span>still a good snack</span>}
    {snack.favorite ?
      'This snack is your favorite!' :
      <button className="btn btn-primary" onClick={handleClick}>Favorite this snack!</button>
    }
    {/* option two: to conditionally hide something */}
    {/* {name === 'Popcorn' && <small>the best snack</small>} */}
    {/* {bool ? 'true' : 'false'} */}
  </p>
}

export default Snack;
