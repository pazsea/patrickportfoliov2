import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const planets = [
  {
    id: "1",
    text: "Mitt första projekt",
    url: "img/earth.jpg",
    alt: "ett"
  },
  {
    id: "2",
    text: "Mitt andra projekt",
    url: "img/earth.jpg",
    alt: "två"
  },
  {
    id: "3",
    text: "Mitt tredje",
    url: "img/earth.jpg",
    alt: "tre"
  }
];

ReactDOM.render(<App planets={...props } />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
