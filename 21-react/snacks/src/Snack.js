import React from 'react';

function Snack({ name }) {
  let greeting = "hello!!";
  // ternaries are WTF: WHAT ? true : false
  return <p>
    Snack: {name} {name === 'Popcorn' ? <small>the best snack</small> : ''}
  </p>
}

export default Snack;
