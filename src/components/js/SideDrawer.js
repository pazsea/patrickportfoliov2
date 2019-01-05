import React from "react";
import { Link } from "react-scroll";

import "../css/sideDrawer.css";

const sideDrawer = props => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <button className="close" onClick={props.click}>
            <i class="fas fa-times-circle fa-3x" />
          </button>{" "}
        </li>
        <li>
          <Link
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
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
            activeClass="active"
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
            activeClass="active"
            to="Feedback"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a>Feedback</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
