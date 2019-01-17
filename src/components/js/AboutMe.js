import React, { Component } from "react";
import { Element } from "react-scroll";
import CircularProgressbar from "react-circular-progressbar";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

import "../css/bubble.css";
import "../css/aboutme.css";

const proCSS = 70;
const proHTML = 90;
const proJS = 70;
const proReact = 60;

class AboutMe extends Component {
  render() {
    return (
      <Element name="aboutme">
        <section className="two">
          <div className="aboutContainer">
            <Rotate top left>
              <div className="bubbleText">
                <h2>About Me!</h2>
                I am a student studying to become a Front End Developer. That's
                my dream.
                <br /> From when I was very little I had computers as a
                passionate hobby but now I am working hard to fulfill this
                dream.
                <br />
                If you have any feedback or if you have any projects you need
                help with, don't hesitate to contact me!
                <div className="inner">
                  <blockquote className="innerText_one">
                    By the way, this portfolio page is done completely in React
                    and I did some awesome things coding the{" "}
                    <span style={{ color: "red" }}>React</span> way!
                    <br /> Please feel free to check out those coding solutions
                    by clicking the button on the right!
                  </blockquote>
                  <div className="innerText_two">
                    <a
                      type="button"
                      className="button_two"
                      href="https://github.com/pazsea/patrickportfoliov2"
                      target="_blank"
                      without="true"
                      rel="noopener noreferrer"
                    >
                      View my Github repo
                    </a>
                  </div>
                </div>
              </div>
            </Rotate>

            <div className="bubbleContainer">
              <div>
                <i
                  className="fab fa-html5 fa-6x"
                  style={{ margin: "auto", color: "red" }}
                />
                <Zoom left>
                  <div>
                    <CircularProgressbar
                      className="bubblesImg"
                      initialAnimation={true}
                      percentage={proHTML}
                      text={`HTML ${proHTML}%`}
                      styles={{
                        path: {
                          stroke: `rgba(62, 152, 199, ${proHTML / 100})`
                        },
                        text: { fill: "orange", fontSize: "16px" }
                      }}
                    />
                  </div>
                </Zoom>
              </div>
              <div>
                <i
                  className="fab fa-react fa-7x"
                  style={{ margin: "auto", color: "#00d8ff" }}
                />
                <Zoom left>
                  <div>
                    <CircularProgressbar
                      className="bubblesImg"
                      initialAnimation={true}
                      percentage={proReact}
                      text={`React ${proReact}%`}
                      styles={{
                        path: {
                          stroke: `rgba(62, 152, 199, ${proReact / 100})`
                        },
                        text: { fill: "orange", fontSize: "16px" }
                      }}
                    />
                  </div>
                </Zoom>
              </div>
              <div>
                <i
                  className="fab fa-css3 fa-6x"
                  style={{ margin: "auto", color: "blue" }}
                />
                <Zoom left>
                  <div>
                    <CircularProgressbar
                      className="bubblesImg"
                      initialAnimation={true}
                      percentage={proCSS}
                      text={`CCS3 ${proCSS}%`}
                      styles={{
                        path: { stroke: `rgba(62, 152, 199, ${proCSS / 100})` },
                        text: { fill: "orange", fontSize: "16px" }
                      }}
                    />
                  </div>
                </Zoom>
              </div>
              <div>
                <i
                  className="fab fa-js-square fa-6x"
                  style={{ margin: "auto", color: "#f7df1e " }}
                />
                <Zoom left>
                  <div>
                    <CircularProgressbar
                      className="bubblesImg"
                      initialAnimation={true}
                      percentage={proJS}
                      text={`JS ${proJS}%`}
                      styles={{
                        path: { stroke: `rgba(62, 152, 199, ${proJS / 100})` },
                        text: { fill: "orange", fontSize: "16px" }
                      }}
                    />
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}

export default AboutMe;
