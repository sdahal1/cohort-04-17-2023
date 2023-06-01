import React from 'react';
import './Snack.css';

function Snack({ snack }) {
  // let greeting = "hello!!";
  // let bool = false;
  // ternaries are WTF: WHAT ? true : false
  let { name, imageUrl } = snack;
  return <p>
    <img src={imageUrl} alt={name} />
    Snack: {name} {' '}
    {name === 'Popcorn' ? <small className="btn btn-danger">the best snack</small> : <span>still a good snack</span>}
    {/* option two: to conditionally hide something */}
    {/* {name === 'Popcorn' && <small>the best snack</small>} */}
    {/* {bool ? 'true' : 'false'} */}
  </p>
}

export default Snack;
