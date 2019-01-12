import React from "react";

import "../css/rightDrawer.css";

const RightDrawer = props => {
  let drawerClasseses = "right-drawer";
  if (props.show) {
    drawerClasseses = "right-drawer open";
  }

  return (
    <div className={drawerClasseses}>
      <button className="close2" onClick={props.click}>
        <i class="fas fa-times-circle fa-3x " />
      </button>
      <img src={require("../pics/logo.svg")} />

      <a href="https://github.com/pazsea" target="_blank">
        Github
        <i className="fab fa-github" />
      </a>

      <a href="https://www.facebook.com/patrick.sjoberg" target="_blank">
        Facebook
        <i className="fab fa-facebook" />
      </a>

      <a href="https://www.linkedin.com/in/patrick-sjoberg/" target="_blank">
        Linkedin
        <i className="fab fa-linkedin" />
      </a>
      <a href="mailto:patrick.sjoberg@live.se">
        Email
        <i className="fas fa-envelope" />
      </a>
    </div>
  );
};

export default RightDrawer;
