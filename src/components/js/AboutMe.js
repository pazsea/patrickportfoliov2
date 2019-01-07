import React from "react";
import { Element } from "react-scroll";


import "../css/aboutme.css";

const AboutMe = () => (
  <Element name="aboutme">
    <section className="two">
      <div className="aboutContainer">
      <div className="bubbleText"></div>
        <div className="bubbleContainer">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </section>
  </Element>
);

export default AboutMe;

const percentage = 66;

/* const App = () => (
  <div>
    <Label>Basic example</Label>
    <div style={{ width: '100px' }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div> */
