import React from "react";
// import { Link } from "react-router-dom";

const Item = ({ url, name, image, rating, summary, country }) => {
  return (
    <a href={url} target="blank">
      <div className="mt-4 mr-0 bg-white shadow-lg cursor-pointer">
        <div className="bg-sky-300 p-3">
          <img
            className="object-fill h-56 w-full"
            src={image.medium ? image.medium : image}
            alt={name}
          />
        </div>
        <div className="p-3">
          {name && <h4>Name : {name}</h4>}
          {rating && <h4>Rating : {rating}</h4>}
          {country && <h4>Country : {country}</h4>}
          {summary && (
            <div className="flex flex-row flex-wrap">
              <span>Summary :</span>
              <div dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Item;
