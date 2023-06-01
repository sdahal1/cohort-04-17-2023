import { useState } from 'react';
import Header from './Header';
import './App.css';
import SnacksList, { snacks } from './SnacksList';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  return (
    <div className="App">
      <header>
        <Header numberOfClicks={numberOfClicks} setNumberOfClicks={setNumberOfClicks} />
      </header>
      <main>
        <SnacksList numberOfClicks={numberOfClicks} />
      </main>
    </div>
  );
}

export default App;
