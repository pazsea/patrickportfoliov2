import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";



const projects = [
  {
    id: "1",
    head: "My first Landing Page",
    url: require("../src/components/pics/firstproject.png"),
    alt: "ett",
    text: "Ok, this is where I was 6 months ago. I created my first landing page and I was so excited about the hover effect over the button. You got to start somewhere."
  },
  {
    id: "2",
    head: "My first portfolio website",
    url: require("../src/components/pics/myportfolio.png"),
    alt: "två",
    text: "After two monthts in school we got an big assignment. We created an portfolio page. Mine was done only in CSS, HTML and JS."
  },
  {
    id: "3",
    head: "Our text editor",
    url: require("../src/components/pics/quirepage.png"),
    alt: "tre",
    text: "This was our first group project. For this we had instruction to creat an fully fuctional text editor where the user could save, retrieve and marke notes in LS."
  },
];

ReactDOM.render(<App projects={ projects } />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
