import React, { Component } from "react";
import Sticky from "react-sticky-el";
import "../css/navbar.css";

class Nav extends Component {
  render() {
    return (
      <Sticky>
        <nav>
          <ul>
            <li>
              <a href="#welcome">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </Sticky>
    );
  }
}

export default Nav;
