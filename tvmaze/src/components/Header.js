import React, { useEffect, useState } from "react";

const Header = ({ onChange }) => {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    onChange(category);
  }, [category, onChange]);

  return (
    <div className="bg-green-400 h-40 flex flex-col justify-center item-center w-[80%]">
      <h3 className="text-center">TVmaze</h3>
      <div className="flex justify-start items-center relative bg-green-200 w-full  h-1/2 ">
        <div className="mx-4">
          <input
            type="radio"
            onChange={handleChange}
            checked={category === "people"}
            value="people"
          />
          <label>Actor</label>
        </div>
        <div className="mx-4">
          <input
            type="radio"
            onChange={handleChange}
            checked={category === "shows"}
            value="shows"
          />
          <label>Shows</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
