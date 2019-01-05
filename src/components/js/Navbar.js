import React, { Component } from "react";
import Sticky from "react-sticky-el";
import DrawerToggleButton from '../js/DrawerToggleButton';
import { Link } from "react-scroll";
import "../css/navbar.css";

class Nav extends Component {
  render() {
    return (
      <Sticky>
      <header className="toolbar">
      <nav className="toolbar__navigation">
        <div>
          <DrawerToggleButton click={this.props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src={require("../pics/logo.svg")}></img></a></div>
        <div className="spacer"></div>
        <div className="toolbar__navigation-items">
          <ul>
            <li><a href="/">About Me</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        </nav>

      </header>

      </Sticky>
    );
  }
}

export default Nav;


{/* <Link
activeClass="active"
to="contact"
spy={true}
smooth={true}
offset={0}
duration={500}
onSetActive={this.handleSetActive}
>
Contact
</Link> */}