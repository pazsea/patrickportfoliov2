import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const projects = [
  {
    id: "1",
    head: "Booking App",
    url: require("../src/components/pics/bookingapp.png"),
    alt: "två",
    button_url: "https://github.com/pazsea/bookingapp",
    text:
      "With a team of great student colleagues, we created this booking app. Applicable at any school or company that needs to reserve rooms for meetings. Firebase + React = Win!",
    api_url: "https://api.github.com/repos/pazsea/bookingapp/commits/master"
  },
  {
    id: "2",
    head: "Sniph parfumes",
    url: require("../src/components/pics/sniph.png"),
    alt: "ett",
    button_url: "https://github.com/pazsea/gjtp",
    text:
      "Me and a team of awesome student developers got an chance to develop a proof of concept for Sniph. They wanted their customer to stay longer on the page. We used Redux/Saga/React/Node.Js/SQL to accomplish this.",
    api_url: "https://api.github.com/repos/pazsea/gjtp/commits/master"
  },
  {
    id: "3",
    head: "Our text editor",
    url: require("../src/components/pics/quirepage-min.png"),
    alt: "tre",
    button_url: "https://github.com/bayev/Taurus",
    text:
      "This was our first group project. For this, we had instruction to create a fully functional text editor. With a save function in LS.",
    api_url: "https://api.github.com/repos/bayev/Taurus/commits/master"
  }
];

ReactDOM.render(<App projects={projects} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
