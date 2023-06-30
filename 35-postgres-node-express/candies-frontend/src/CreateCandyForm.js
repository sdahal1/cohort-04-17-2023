import React, { useState } from 'react';

function CreateCandyForm({ fetchCandies }) {
  const [formData, setFormData] = useState({
    candy_name: '',
    sweetness: 0
  });
  function handleUpdate(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:8080/candies', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: formData })
    })
      .then(() => fetchCandies())
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" name="candy_name" onChange={handleUpdate} value={formData.candy_name} />
    <input type="number" name="sweetness" onChange={handleUpdate} value={formData.sweetness} />
    <input type="submit" />
  </form>
}

export default CreateCandyForm;