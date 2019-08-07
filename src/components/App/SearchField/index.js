import React, { useState } from 'react';
import './style.scss';

const SearchField = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className="search-field" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search-value"
        placeholder="Enter Video ID..."
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default SearchField;
