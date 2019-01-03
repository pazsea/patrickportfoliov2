import React, { Component } from "react";
import Sticky from "react-sticky-el";
import { Link } from "react-scroll";
import "../css/navbar.css";

class Nav extends Component {
  render() {
    return (
      <Sticky>
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="welcome"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-38}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-38}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Sticky>
    );
  }
}

export default Nav;
