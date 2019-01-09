import React from "react";
import { Link } from "react-scroll";

import "../css/sideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  let close = props.close;

  return (
    <nav className={drawerClasses}>
      <ul>
        <button className="close" onClick={close}>
          <i class="fas fa-times-circle fa-3x" />
        </button>
        <li id="logo">
          <img src={require("../pics/logo.svg")} />
        </li>

        <Link
          activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li onClick={close}>
            <a onClick={close}>Home</a>
          </li>
        </Link>

        <li onClick={close}>
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a onClick={close}>About Me</a>
          </Link>
        </li>
        <li onClick={close}>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a onClick={close}>Portfolio</a>
          </Link>
        </li>
        <li onClick={close} onClick={props.rightDrawerClick}>
          <Link
            activeClass="active"
            to="Feedback"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.rightDrawerClick}
          >
            <a onClick={close}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
