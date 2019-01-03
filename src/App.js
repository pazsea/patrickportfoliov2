import React from "react";
import Welcome from "./components/js/Welcome";
import Portfolio from "./components/js/Portfolio";
import AboutMe from "./components/js/AboutMe";
import Navbar from "./components/js/Navbar";



const App = (props) => (
  <React.Fragment>
    <Welcome />
    <Navbar /> 
    <AboutMe />
    <Portfolio 
    {...props}
    />
  </React.Fragment>
);

export default App;
