import React from 'react';

import '../css/sideDrawer.css';

const sideDrawer = props => {
  return (
    <nav className="side-drawer">
    
      <ul>
      <li><button className="close" onClick={props.click}><i class="fas fa-times-circle fa-3x"></i></button> </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;