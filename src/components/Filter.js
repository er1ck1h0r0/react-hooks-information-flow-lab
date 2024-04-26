// Filter.js
import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="Filter">
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;
