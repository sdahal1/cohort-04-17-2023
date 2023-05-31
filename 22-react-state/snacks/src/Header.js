// How to Make a New Component
// Step 1: import react
import React, { useState } from 'react';

// Step 2: write a basic function that returns some boring HTML
function Header() {
  // let numberOfClicks = 0;
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  let getClickMessage = () => {
    if (numberOfClicks > 10) {
      return 'You clicked so many times!'
    } else {
      return 'Keep going!'
    }
  }
  let clickLogger = () => {
    // numberOfClicks++;
    setNumberOfClicks(numberOfClicks + 1);
    console.log('clicked!', numberOfClicks);
  }
  return <>
    <h1 onClick={clickLogger}>Snacks! (From the header component!)</h1>
    <h2>Number of clicks: {numberOfClicks} {getClickMessage()}</h2>
  </>
}

// Step 3: export the function
export default Header;
