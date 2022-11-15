import React, { useEffect, useState } from "react";

const SearchBar = ({ type, searchType, onChange }) => {
  const [searchString, setSearchString] = useState("");

  const searchHandler = (e) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    onChange(searchString);
  }, [searchString, onChange]);

  return (
    <div className="flex justify-center items-center w-2/3">
      <input
        className="border border-red-500 w-1/2 mt-8 h-10 p-4"
        type={type}
        value={searchString}
        placeholder={`Search ${searchType}`}
        onChange={searchHandler}
      />
      {/* <button type="button" onClick={searchHandler}>
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;
