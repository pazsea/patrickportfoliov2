import React, { Component } from "react";
import { Element, Link } from "react-scroll";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import "../css/welcome.css";

class Welcome extends Component {
  render() {
    return (
      <Element name="welcome">
        <section className="one">
          <div className="welcomeall">
            <Jump>
              <div id="greeting">
                <h1>Hi! I am Patrick.</h1>
              </div>
            </Jump>
            <Reveal effect="fadeInDown">
              <div className="picture">
                <img
                  id="avatarme"
                  src={require("../pics/meavatar-min.png")}
                  alt="Patrick Sjöberg"
                />
              </div>
            </Reveal>
            <Fade bottom>
              <div className="work__title">
                <p>Front End Developer Student</p>
                <p>| Seeking internship in autumn 2019 |</p>
              </div>
            </Fade>

            <div className="contact__div">
              <Fade bottom>
                <Pulse>
                  <div className="contact__img">
                    <a
                      href="https://github.com/pazsea"
                      target="_blank"
                      without="true"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github fa-3x" />
                    </a>
                    <a
                      href="https://www.facebook.com/patrick.sjoberg"
                      target="_blank"
                      without="true"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook fa-3x" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/patrick-sjoberg/"
                      target="_blank"
                      without="true"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-3x" />
                    </a>
                    <a href="mailto:patrick.sjoberg@live.se">
                      <i className="fas fa-envelope fa-3x" />
                    </a>
                  </div>
                </Pulse>
              </Fade>
            </div>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <div className="arrow__container">
                <i className="fas fa-arrow-down" />
              </div>
            </Link>
          </div>

          <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop" />
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" />
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom" />
            </div>
          </div>
        </section>
      </Element>
    );
  }
}

export default Welcome;
