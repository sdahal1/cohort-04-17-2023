import React, { useState } from 'react';

function SearchForm({ setMake }) {
  let [query, setQuery] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    setMake(query);
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="search">Search for a make</label>
    <input type="text" name="search" id="search" onChange={e => setQuery(e.target.value)} />
    <button type="submit">Go!</button>
  </form>
}

export default SearchForm;
