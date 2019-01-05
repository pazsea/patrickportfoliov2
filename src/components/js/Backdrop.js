import React from "react";

import "../css/backdrop.css";

const Backdrop = props => (
  <button className="backdrop" onClick={props.click} />
);
 

export default Backdrop;
