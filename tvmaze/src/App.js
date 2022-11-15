import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [queryString, setQueryString] = useState("");

  const searchTypeHandler = (type) => {
    setSearchType(type);
  };

  const searchBarHandler = (queryString) => {
    setQueryString(queryString);
  };

  useEffect(() => {
    if (searchType !== "") {
      try {
        axios
          .get(`https://api.tvmaze.com/search/${searchType}?q=${queryString}`)
          .then((res) => {
            const data = res.data;
            setFetchedData(data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchType, queryString]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header searchType={searchType} onChange={searchTypeHandler} />
      {searchType && (
        <SearchBar
          type="text"
          searchType={searchType}
          onChange={searchBarHandler}
        />
      )}
      {fetchedData && <div>{JSON.stringify(fetchedData)}</div>}
    </div>
  );
};

export default App;
