import React, { Component } from "react";
import DrawerToggleButton from "../js/DrawerToggleButton";
import { Link } from "react-scroll";
import "../css/navbar.css";

class Nav extends Component {
  render() {
    const { drawerClickHandler, rightDrawerClick } = this.props;
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={drawerClickHandler} />
          </div>
          <div className="toolbar__logo">
            <Link to="welcome" smooth={true} offset={0} duration={500}>
              <img
                src={require("../pics/logo.svg")}
                alt="My signature in Navbar"
              />
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar__navigation-items">
            <ul>
              <li>
                <Link
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  onClick={rightDrawerClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
