import React from "react";
import "../css/welcome.css";

const Welcome = () => (


  
  <section>
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
);

export default Welcome;
