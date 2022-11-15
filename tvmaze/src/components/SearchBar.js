import React from "react";

const SearchBar = ({ type, searchType }) => {
  return (
    <div className="border border-red-500 w-1/2 mt-8">
      <input type={type} placeholder={`Search ${searchType}`} />
    </div>
  );
};

export default SearchBar;
