import React from "react";
import Fade from "react-reveal/Fade";

import "../css/rightDrawer.css";

const RightDrawer = ({ click, show }) => (
  <div className={show ? "right-drawer open" : "right-drawer"}>
    <button className="close2" onClick={click}>
      <i className="fas fa-times-circle fa-3x " />
    </button>
    <img src={require("../pics/logo.svg")} alt="My Signature in rightDrawer" />
    <Fade bottom>
      <a
        href="https://github.com/pazsea"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        title="Click to come to my Github account"
      >
        Github
        <i className="fab fa-github" />
      </a>

      <a
        href="https://www.facebook.com/patrick.sjoberg"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        title="Click to come to my Facebook account"
      >
        Facebook
        <i className="fab fa-facebook" />
      </a>

      <a
        href="https://www.linkedin.com/in/patrick-sjoberg/"
        target="_blank"
        without="true"
        rel="noopener noreferrer"
        title="Click to come to my Linkedin account"
      >
        Linkedin
        <i className="fab fa-linkedin" />
      </a>
      <a href="mailto:patrick.sjoberg@live.se" title="Click to send my a email">
        Email
        <i className="fas fa-envelope" />
      </a>
    </Fade>
  </div>
);
export default RightDrawer;
