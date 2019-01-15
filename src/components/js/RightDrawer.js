import React from "react";
import Fade from "react-reveal/Fade";

import "../css/rightDrawer.css";

const RightDrawer = ({ click, show }) => {
  let drawerClasseses = "right-drawer";
  if (show) {
    drawerClasseses = "right-drawer open";
  }

  return (
    <div className={drawerClasseses}>
      <button className="close2" onClick={click}>
        <i className="fas fa-times-circle fa-3x " />
      </button>
      <img
        src={require("../pics/logo.svg")}
        alt="My Signature in rightDrawer"
      />
      <Fade bottom>
        <a
          href="https://github.com/pazsea"
          target="_blank"
          without="true"
          rel="noopener noreferrer"
        >
          Github
          <i className="fab fa-github" />
        </a>

        <a
          href="https://www.facebook.com/patrick.sjoberg"
          target="_blank"
          without="true"
          rel="noopener noreferrer"
        >
          Facebook
          <i className="fab fa-facebook" />
        </a>

        <a
          href="https://www.linkedin.com/in/patrick-sjoberg/"
          target="_blank"
          without="true"
          rel="noopener noreferrer"
        >
          Linkedin
          <i className="fab fa-linkedin" />
        </a>
        <a href="mailto:patrick.sjoberg@live.se">
          Email
          <i className="fas fa-envelope" />
        </a>
      </Fade>
    </div>
  );
};

export default RightDrawer;
