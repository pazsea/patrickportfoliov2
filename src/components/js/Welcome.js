import React, { Component } from "react";
import { Element, Link } from "react-scroll";
import "../css/welcome.css";

class Welcome extends Component {
  render() {
    return (
      <Element name="welcome">
        <section className="one">
          <div className="welcomeall">
            <div className="greeting">
              <h1>Hi! I am Patrick.</h1>
            </div>
            <div className="picture">
              <img
                className="avatarme"
                src={require("../pics/meavatar.png")}
                alt="Patrick Sjöberg"
              />
            </div>
            <div className="work__title">
              <p>Front End Developer | Ninja Warrior | Citizen </p>
            </div>
            <div className="contact__div">
              <div className="contact__img">
                <i className="fab fa-github fa-3x" />
                <i className="fab fa-facebook fa-3x" />
                <i className="fab fa-linkedin fa-3x" />
              </div>
            </div>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className="arrow__container">
              <i class="fas fa-arrow-down fa-2x"></i>
              </div>
            </Link>
          </div>

          <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgTop">
              <div class="wave waveTop" />
            </div>
            <div class="waveWrapperInner bgMiddle">
              <div class="wave waveMiddle" />
            </div>
            <div class="waveWrapperInner bgBottom">
              <div class="wave waveBottom" />
            </div>
          </div>
        </section>
      </Element>
    );
  }
}

export default Welcome;

{
  /* <div id="container">
<h1>Hi! I am Patrick!</h1>
<img src={require("../pics/meavatar.jpg")} alt="Patrick Sjöberg" />
</div>
<div id="title">
<p>Front End Developer | Ninja Warrior | Citizen </p>
</div>
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
</div> */
}
