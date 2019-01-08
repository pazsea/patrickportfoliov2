import React from "react";

const Cards = props => {


  return (
    <div className="container-all">
      <img src={props.url} alt={props.alt} />
      <h3>{props.head}</h3>
      <p style={{ padding: "20px"}}>{props.text}</p>
      <button className="readmore">Read More...</button>
    </div>
  );
};

export default Cards;
