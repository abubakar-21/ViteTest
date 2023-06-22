import React from 'react';

const SearchForm = ({ onSearch }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(e.target.elements.query.value); }}>
      <input name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
