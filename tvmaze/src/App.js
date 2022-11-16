import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Item from "./components/Item";
import ImageNotAvailable from "./assest/No_image_available.svg.png";


const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [category, setCategory] = useState("");

  const categoryHandler = (type) => {
    setCategory(type);
  };

  const itemSearchHandler = (data) => {
    setFetchedData(data);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header onChange={categoryHandler} />
      {category && (
        <SearchBar
          category={category}
          type="text"
          searchType={category}
          onClick={itemSearchHandler}
        />
      )}
      <div className="grid grid-cols-3 gap-4 justify-center mx-10">
        {fetchedData[0] &&
          fetchedData[0].hasOwnProperty("person") &&
          fetchedData.map((item) => (
            <Item
              key={item.person.id && item.person.id}
              id={item.person.id && item.person.id}
              name={item.person.name && item.person.name}
              image={item.person.image ? item.person.image : ImageNotAvailable}
            />
          ))}
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center mx-10">
        {fetchedData[0] &&
          fetchedData[0].hasOwnProperty("show") &&
          fetchedData.map((item) => (
            <Item
              key={item.show.id && item.show.id}
              id={item.show.id && item.show.id}
              name={item.show.name && item.show.name}
              image={item.show.image ? item.show.image : ImageNotAvailable}
              rating={item.show.rating.average && item.show.rating.average}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
