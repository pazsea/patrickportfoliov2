import React, { Component } from "react";
import Sticky from "react-sticky-el";
import { Link } from "react-scroll";
import "../css/navbar.css";

class Nav extends Component {
  render() {
    return (
      <Sticky>
        <nav>
          <h1 className="logo">
            <a>
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
            </a>
          </h1>

          <ul className="main-nav">
            <li>
              <a>
                <Link
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  About Me
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  Portfolio
                </Link>
              </a>
            </li>

            <li>
              <a>
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
              </a>
            </li>
          </ul>
        </nav>
      </Sticky>
    );
  }
}

export default Nav;
