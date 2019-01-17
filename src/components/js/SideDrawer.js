import React from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

import "../css/sideDrawer.css";

const sideDrawer = ({ show, close, rightDrawerClick }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <button className="close" onClick={close}>
          <i className="fas fa-times-circle fa-3x" />
        </button>
        <li id="logo">
          <img
            src={require("../pics/logo.svg")}
            alt="My Signature in Sidedrawer"
          />
        </li>
        <Fade bottom>
          <Link
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={close}
            title="Takes you back to the home section"
          >
            <li onClick={close}>Home</li>
          </Link>

          <li onClick={close}>
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={close}
              title="A bit about me"
            >
              About Me
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
              onClick={close}
              title="My projects I worked on"
            >
              Portfolio
            </Link>
          </li>
          <li onClick={rightDrawerClick}>
            <Link
              activeClass="active"
              to="Feedback"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={rightDrawerClick}
              title="Choose any alternatives to contact me"
            >
              Contact
            </Link>
          </li>
        </Fade>
      </ul>
    </nav>
  );
};

export default sideDrawer;
