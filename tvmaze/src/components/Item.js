import React from "react";
// import { Link } from "react-router-dom";

const Item = ({ url, id, name, image, rating }) => {
  return (
    <div className="inline-block mt-4 mr-0 bg-white shadow-lg cursor-pointer">
      <div className="bg-sky-300">
        <img
          className="object-fill h-56 w-96"
          src={image.medium ? image.medium : image}
          alt={name}
        />
      </div>
      <div>
        <h4>{name}</h4>
        <h4>{rating}</h4>
      </div>
    </div>
  );
};

export default Item;
