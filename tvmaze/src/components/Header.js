import React, { useEffect, useState } from "react";

const Header = ({ onChange }) => {
  const [resourceType, setResourceType] = useState("");
  const handleChange = (e) => {
    setResourceType(e.target.value);
  };

  useEffect(() => {
    onChange(resourceType);
  }, [resourceType, onChange]);

  return (
    <div className="bg-green-400 h-40 flex flex-col justify-center item-center w-[80%]">
      <h3 className="text-center">TVmaze</h3>
      <div className="flex justify-start items-center relative bg-green-200 w-full  h-1/2 ">
        <div className="mx-4">
          <label>Actors</label>
          <input
            type="radio"
            name="radio"
            onChange={handleChange}
            checked={resourceType === "actor"}
            value="actor"
          />
        </div>
        <div className="mx-4">
          <label>Shows</label>
          <input
            type="radio"
            name="radio"
            onChange={handleChange}
            checked={resourceType === "shows"}
            value="shows"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
