import React, { useState } from 'react';
import './App.css';
import CreatureList from './CreatureList';
import AddCreature from './AddCreature';

function App() {
  const [creatures, setCreatures] = useState([
    {
      name: 'Smaug',
      abilities: 'fire, fly, hoard wealth',
      origin: 'Lord of the Rings',
      coolness: 7
    }, {
      name: 'Blastoise',
      abilities: 'water cannons, swim vast distances, hydro pump',
      origin: 'Pokemon',
      coolness: 9
    }
  ])
  // If we wrote the above without using state, it would look like:
  // const creatures = [
  //   {
  //     name: 'Smaug',
  //     abilities: 'fire, fly, hoard wealth',
  //     origin: 'Lord of the Rings',
  //     coolness: 7
  //   }, {
  //     name: 'Blastoise',
  //     abilities: 'water cannons, swim vast distances, hydro pump',
  //     origin: 'Pokemon',
  //     coolness: 9
  //   }
  // ]
  function addCreature(newCreature) {
    setCreatures([...creatures, newCreature])
  }
  function updateCreature(creatureToUpdate) {
    setCreatures(creatures.map(c => c === creatureToUpdate ? creatureToUpdate : c))
  }
  function deleteCreature(creatureToDelete) {
    let filteredCreatures = creatures.filter(c => c !== creatureToDelete);
    setCreatures(filteredCreatures);
  }

  return (
    <div className="container">
      <header>
        <h1>Imaginary Creatures</h1>
      </header>
      <main>
        <AddCreature addCreatureHandler={addCreature} />
        <CreatureList creatures={creatures} updateCreature={updateCreature} deleteCreature={deleteCreature} />
      </main>
    </div>
  );
}

export default App;
