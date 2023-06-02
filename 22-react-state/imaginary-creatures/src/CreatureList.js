import React from 'react';
import Creature from './Creature';

function CreatureList({ creatures, updateCreature, deleteCreature }) {
  return <>
    {creatures.map(c => <Creature creature={c} updateCreature={updateCreature} deleteCreature={deleteCreature} key={c.name} />)}
  </>
}

export default CreatureList;
