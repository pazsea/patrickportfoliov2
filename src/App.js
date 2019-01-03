import React from "react";
import Welcome from "./components/js/Welcome";
import Portfolio from "./components/js/Portfolio";
import AboutMe from "./components/js/AboutMe";
import Navbar from "./components/js/Navbar";


const App = () => (
  <React.Fragment>
    <Welcome />
    <Navbar /> 
    <AboutMe />
    <Portfolio />
  </React.Fragment>
);

export default App;
