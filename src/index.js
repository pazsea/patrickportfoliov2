import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const projects = [
  {
    id: "1",
    head: "My first portfolio website",
    url: require("../src/components/pics/myportfolio.png"),
    alt: "två",
    button_url: "https://github.com/pazsea/patrickportfolio",
    text:
      "After two monthts in school we got an big assignment. We created an portfolio page. Mine was done only in CSS, HTML and JS."
    /*     api_url:
      "https://api.github.com/repos/pazsea/patrickportfolio/commits/master" */
  },
  {
    id: "2",
    head: "Chaweng Thai Wok",
    url: require("../src/components/pics/chawengthaiwok.png"),
    alt: "ett",
    button_url: "https://github.com/pazsea/chawengthaiwok",
    text:
      "I got an project working on an friends resturants homepage. I did this page using only HTML/CSS."
    /*     api_url: "https://api.github.com/repos/pazsea/chawengthaiwok/commits/master" */
  },
  {
    id: "3",
    head: "Our text editor",
    url: require("../src/components/pics/quirepage.png"),
    alt: "tre",
    button_url: "https://github.com/bayev/Taurus",
    text:
      "This was our first group project. For this we had instruction to creat an fully fuctional text editor where the user could save, retrieve and marke notes in LS."
    /*     api_url: "https://api.github.com/repos/bayev/Taurus/commits/master" */
  }
];

ReactDOM.render(<App projects={projects} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
