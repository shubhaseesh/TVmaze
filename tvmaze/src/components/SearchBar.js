import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ type, searchType, onChange, onClick, category }) => {
  const [searchString, setSearchString] = useState("");

  const searchHandler = (e) => {
    setSearchString(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchString("");
  };

  const itemSearchHandle = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/${category}?q=${searchString}`
    );
    onClick(data);
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center mt-8">
      <input
        className="w-full bg-white text-black border border-red-600 rounded h-10 p-2 shadow-xl placeholder-gray-500 placeholder-opacity-100"
        type={type}
        value={searchString}
        placeholder={`Search ${searchType}`}
        onChange={searchHandler}
      />

      <button
        className="w-full bg-blue-700 mt-3 text-white rounded-sm h-10"
        onClick={itemSearchHandle}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
