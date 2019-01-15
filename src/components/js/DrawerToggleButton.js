import React from "react";

import "../css/drawerToggleButton.css";

const DrawerToggleButton = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default DrawerToggleButton;
