import React from "react";
import "../css/cards.css";

const Cards = (props) => (
  <div className="container-all">
    <img src={props.url} alt={props.alt} />{" "}
    {/* PROPS BILD ALT OCH HREF */}
    <div className="container-text">
      <p>{props.text}</p>
    </div>
  </div>
);

export default Cards;
