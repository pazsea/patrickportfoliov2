import React from "react";

const Cards = props => {
  return (
    <div className="container-all">
      <img src={props.url} alt={props.alt} />
      <h3>{props.text}</h3>
      <button>Read More...</button>
    </div>
  );
};

export default Cards;
