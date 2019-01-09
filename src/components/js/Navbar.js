import React, { Component } from "react";
import Sticky from "react-sticky-el";
import DrawerToggleButton from "../js/DrawerToggleButton";
import { Link } from "react-scroll";
import "../css/navbar.css";

class Nav extends Component {
  render() {
    return (
      <Sticky>
        <header className="toolbar">
          <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
              <Link to="welcome" smooth={true} offset={0} duration={500}>
                <a>
                  <img src={require("../pics/logo.svg")} />
                </a>
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
                    offset={0}
                    duration={500}
                  >
                    <a>About Me</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <a>Portfolio</a>
                  </Link>
                </li>

                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={this.props.rightDrawerClick}
                  >
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default Nav;

{
  /* <Link
activeClass="active"
to="contact"
spy={true}
smooth={true}
offset={0}
duration={500}
onSetActive={this.handleSetActive}
>
Contact
</Link> */
}
