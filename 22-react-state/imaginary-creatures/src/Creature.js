import React from 'react';
import './Creature.css';

function Creature({ creature, updateCreature, deleteCreature }) {
  const { name, abilities, origin, coolness } = creature;
  function getCoolnessClassName() {
    if (coolness > 8) return 'cool';
    else if (coolness > 6) return 'semiCool';
    else return 'notCool';
  }
  function updateCoolness(amount) {
    creature.coolness += amount;
    updateCreature(creature);
  }
  return <div className={getCoolnessClassName()}>
    <h4>{name}</h4>
    <ul>
      <li>abilities: {abilities}</li>
      <li>Comes from {origin}</li>
      <li>
        Is {coolness}/10 cool
        <button onClick={() => updateCoolness(-1)}>-</button>
        <button onClick={() => updateCoolness(1)}>+</button>
      </li>
      <li>
        <button onClick={() => deleteCreature(creature)}>Delete</button>
      </li>
    </ul>
  </div>
}

export default Creature;
