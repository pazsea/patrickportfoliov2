import React from "react";

import "../css/backdrop.css";

const Backdrop = props => (
  <button id="backdrop" onClick={props.click}><i class="fas fa-times-circle fa-5x"></i></button>
);
 

export default Backdrop;
