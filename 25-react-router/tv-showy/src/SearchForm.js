import React, { useState } from 'react';

function SearchForm({setSearchTerm}) {
  let initialFormState = {
    query: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setSearchTerm(formData.query);
  }

  return <div>
    <h3>Search!</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="query">Enter search text</label>
      <input type="text" name="query" id="query" value={formData.query} onChange={handleChange} />
      <input type="submit" value="Search" />
    </form>
  </div>
}

export default SearchForm;
