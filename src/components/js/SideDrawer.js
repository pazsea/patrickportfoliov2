import React from 'react';

import '../css/sideDrawer.css';

const sideDrawer = props => {
  return (
    <nav className="side-drawer">
    <button className="close" onClick={props.click}></button> 
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;