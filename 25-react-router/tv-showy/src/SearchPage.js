import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function SearchPage() {
  // dealing with the search functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // when the search term changes, make a request for data from the API

  useEffect(() => {
    if (searchTerm) {
      const abortController = new AbortController();
      fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`,
        { signal: abortController.signal })
        .then(response => response.json())
        .then(data => data.map(completeData => completeData.show))
        .then(data => setSearchResults(data))
        .catch(e => {
          if (e.name === 'AbortError') {
            console.log('aborted');
          } else {
            throw e;
          }
        });
      return () => abortController.abort();
    }
  }, [searchTerm]);

  return <div>
    <h3>Search!</h3>
    <SearchForm setSearchTerm={setSearchTerm} />
    <SearchResults shows={searchResults} />
  </div>
}

export default SearchPage;
