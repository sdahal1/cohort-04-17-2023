import React, { useState } from 'react';

function BearForm({ headerText, initialFormData, submitButtonLabel, submitHandler }) {
  const [formData, setFormData] = useState(initialFormData);
  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // using the prop to pass the information back to the App component
    submitHandler(formData);
    setFormData({ ...initialFormData });
  }
  return <form onSubmit={handleFormSubmit}>
    <h3>{headerText}</h3>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" value={formData.name} onChange={handleInput} />
    <label htmlFor="imageUrl">Image URL</label>
    <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleInput} />
    <label htmlFor="habitat">habitat</label>
    <input type="text" name="habitat" id="habitat" value={formData.habitat} onChange={handleInput} />
    <input type="submit" value={submitButtonLabel} className="btn btn-primary" />
  </form>
}

export default BearForm;