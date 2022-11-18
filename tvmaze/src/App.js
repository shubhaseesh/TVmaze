import React, { useState } from "react";
import RadioButtonHeader from "./components/RadioButtonHeader";
import SearchBar from "./components/SearchBar";
import Item from "./components/Item";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  const categoryHandler = (type) => {
    setCategory(type);
  };

  const itemSearchHandler = (data) => {
    if (data.length > 0) {
      setError(false);
      setFetchedData(data);
    } else {
      setError(true);
      setFetchedData([]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <RadioButtonHeader onChange={categoryHandler} />
      {category && (
        <SearchBar
          category={category}
          type="text"
          onClick={itemSearchHandler}
        />
      )}

      {error && <h1 className="mt-5">No data found.</h1>}
      {fetchedData.length > 0 && (
        <Item category={category} data={fetchedData} />
      )}
    </div>
  );
};

export default App;
