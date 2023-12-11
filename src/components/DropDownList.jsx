import React from 'react';

export const DropDownList = ({ value, setCategory }) => {
  const handleSelectionChange = (e) => {
    console.log("drop down value:", e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="py-6 flex items-center justify-center">
      {/* Centered container */}
      <div className="text-white">
        <label className="pr-2">Select an option:</label>
        <select
          className="text-black rounded border-none px-2 py-1" 
          value={value}
          onChange={handleSelectionChange}
        >
          <option value="" disabled>Select one...</option>
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
          <option value="top_rated">Top rated</option>
        </select>
      </div>
    </div>
  );
};

