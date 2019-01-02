import React from "react";
import "../css/welcome.css";

const Welcome = () => (
  <section>
    <div id="container">
      <h1>Hi! I am Patrick!</h1>
      <div className="photo" alt="A picture of me" />
      <p>Front End Developer | Ninja Warrior | Citizen </p>
      <div id="contacts">
        <div className="contImg">
          <i class="fab fa-github" />
        </div>
        <div className="contImg" />
        <div className="contImg" />
      </div>
    </div>
  </section>
);

export default Welcome;
