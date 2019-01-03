import React from "react";

const Cards = props => {
  return (
    <div className="container-all">
      <img src={props.url} alt={props.alt} />
        <p>{props.text}</p>
        <button>Read More...</button>

    </div>
  );
};

export default Cards;
