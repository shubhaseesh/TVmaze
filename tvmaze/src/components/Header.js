import React, { useState } from "react";

const Header = ({onChange}) => {
  const [resourceType, setResourceType] = useState("");
  const handleChange = (e) => {
    setResourceType(e.target.value);
  };
  return (
    <div className="bg-green-400 h-40 flex justify-center item-center w-[80%]">
      <div className="flex justify-start items-center relative bg-green-200 w-2/3 h-1/2 ">
        <div className="mx-4">
          <label>Actors</label>
          <input
            type="radio"
            name="radio"
            onChange={onChange}
            checked={resourceType === "actor"}
            value="actor"
          />
        </div>
        <div className="mx-4">
          <label>Shows</label>
          <input
            type="radio"
            name="radio"
            onChange={onChange}
            checked={resourceType === "shows"}
            value="shows"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
