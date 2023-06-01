import React from 'react';
import Creature from './Creature';

function CreatureList({ creatures, updateCreature }) {
  return <>
    {creatures.map(c => <Creature creature={c} updateCreature={updateCreature} key={c.name} />)}
  </>
}

export default CreatureList;
