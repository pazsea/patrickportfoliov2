import React, {Component} from 'react';
import Sticky from 'react-sticky-el';
import '../css/navbar.css';

 class Nav extends React.Component {
  render() {
    return (
        <Sticky>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      </Sticky> 
    );
  }
}

export default Nav;