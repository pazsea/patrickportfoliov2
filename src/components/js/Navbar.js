import React, {Component} from 'react';
import Sticky from 'react-sticky-el';
import '../css/navbar.css';

 class Nav extends Component {
  render() {
    return (
        <Sticky>
      <nav>
        <ul>
          <a href="#home">Home</a>
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