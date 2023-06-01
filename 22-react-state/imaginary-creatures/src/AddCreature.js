import React, { useState } from 'react';

function AddCreature({ addCreatureHandler }) {
  const initialFormData = {
    name: '',
    abilities: '',
    origin: '',
    coolness: 1
  }
  const [formData, setFormData] = useState(initialFormData);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    addCreatureHandler(
      {
        ...formData,
        coolness: Number(formData.coolness)
      });
    setFormData(initialFormData);
  }
  return <form onSubmit={handleSubmit}>
    <h4>Add a Creature</h4>
    <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
    <input type="text" name="abilities" id="abilities" onChange={handleChange} value={formData.abilities} />
    <input type="text" name="origin" id="origin" onChange={handleChange} value={formData.origin} />
    <input type="number" name="coolness" id="coolness" onChange={handleChange} value={formData.coolness} />
    <input type="submit" />
  </form>
}

export default AddCreature;
