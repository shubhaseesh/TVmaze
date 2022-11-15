import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";



function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchType, setSearchType] = useState('')


  const searchBarHandler = (event) => {
    return setSearchType(event.target.value)
  }


  useEffect(() => {
    try {
      axios.get(`https://api.tvmaze.com/search/people?q=akon`).then((res) => {
        const data = res.data;
        setFetchedData(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Header onChange={searchBarHandler}/>
      <p>{searchType}</p>
      <SearchBar type='text' placeholder={searchType}/>
      {/* {fetchedData && <div>{JSON.stringify(fetchedData)}</div>} */}
    </div>
  );
}

export default App;
