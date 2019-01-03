import React from "react";
import "../css/cards.css";

const Cards = props => {
  return (
    <div className="container-all">
      <img src={props.url} alt={props.alt} />
      <div className="container-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Cards;
