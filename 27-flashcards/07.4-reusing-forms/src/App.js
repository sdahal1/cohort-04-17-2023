import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BearsList from './BearsList';
import AddBearForm from './AddBearForm';

function App() {
  const [bears, setBears] = useState([
    {
      name: 'Winnie',
      imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/201477/rs_1024x570-140807100228-1024.Winnie-The-Pooh.jl.080714.jpg?fit=around%7C1024:570&output-quality=90&crop=1024:570;center,top',
      habitat: 'Hundred Acre Wood'
    },
    {
      name: 'Sloth',
      imageUrl: 'https://thumbs.dreamstime.com/b/young-toed-sloth-its-natural-habitat-amazon-river-peru-bradypus-variegatus-found-peruvian-area-endangered-specie-40590664.jpg',
      habitat: 'amazon river'
    }
  ]);
  function addBear(newBear) {
    setBears([
      ...bears,
      newBear
    ]);
  }
  function deleteBear(bearToDelete) {
    let filteredBears = bears.filter(bear => bear !== bearToDelete);
    setBears(filteredBears);
  }
  return (
    <div className="container">
      <h1>Bears</h1>
      <AddBearForm addBear={addBear} />
      <BearsList allOfTheBears={bears} deleteBear={deleteBear} />
    </div>
  );
}

export default App;
