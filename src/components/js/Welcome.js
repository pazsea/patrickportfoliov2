import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import "../css/welcome.css";

const Welcome = () => (
  <ScrollableAnchor id={'home'}>
  <section id="home">
    <div id="container">
      <h1>Hi! I am Patrick!</h1>
      <img src={require('../pics/me.jpg')} />
      <p>Front End Developer | Ninja Warrior | Citizen </p>
      <div id="contacts">
        <div className="contImg">
          <i className="fab fa-github" />
        </div>
        <div className="contImg">
          <i className="fab fa-facebook" />
        </div>
        <div className="contImg">
          <i className="fab fa-linkedin" />
        </div>
      </div>
    </div>
  </section>
  </ScrollableAnchor>
);

export default Welcome;
