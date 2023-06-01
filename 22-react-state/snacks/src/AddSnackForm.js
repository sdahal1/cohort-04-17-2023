import React, { useState } from 'react';
import './AddSnackForm.css';

function AddSnackForm({ addSnack }) {
  // const [name, setName] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  const initialFormData = {
    name: '',
    imageUrl: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  function handleChange(event) {
    // update the form data, using the event.target.name as the key and the event.target.value as the value
    let newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  }
  function handleSubmit(event) {
    // when the form is submitted, prevent the default and create the new snack
    event.preventDefault();
    console.log('submitted the form!');
    console.log('form data', formData);
    addSnack({ ...formData, favorite: false })
    // reset the form to be empty again
    setFormData(initialFormData);
  }
  return <div className="addSnackForm">
    <h3>Add a Snack</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Snack Name</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
      <label htmlFor="imageUrl">Image URL</label>
      <input type="url" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  </div>
}

export default AddSnackForm;