import React from "react";
import { Element } from "react-scroll";
import CircularProgressbar from "react-circular-progressbar";
import "../css/bubble.css";
import "../css/aboutme.css";

const proCSS = 70;
const proHTML = 90;
const proJS = 70;
const proReact = 60;

const AboutMe = () => (
  <Element name="aboutme">
    <section className="two">
      <div className="aboutContainer">
        <div className="bubbleText" />
        <div className="bubbleContainer">
          <div style={{ position: "relative" }}>
            <i
              class="fab fa-html5 fa-6x"
              style={{ margin: "auto", color: "red" }}
            />

            <div>
              <CircularProgressbar
                className="bubblesImg"
                initialAnimation={true}
                percentage={proHTML}
                text={`HTML ${proHTML}%`}
                styles={{
                  path: { stroke: `rgba(62, 152, 199, ${proHTML / 100})` },
                  text: { fill: "orange", fontSize: "16px" }
                }}
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <i class="fab fa-react fa-7x" style={{ margin: "auto", color:"#00d8ff" }} />
            <div>
              <CircularProgressbar
                className="bubblesImg"
                initialAnimation={true}
                percentage={proReact}
                text={`React ${proReact}%`}
                styles={{
                  path: { stroke: `rgba(62, 152, 199, ${proReact / 100})` },
                  text: { fill: "orange", fontSize: "16px" }
                }}
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <i class="fab fa-css3 fa-7x" style={{ margin: "auto", color:"blue" }} />

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
          </div>
          <div style={{ position: "relative" }}>
            <i
              class="fab fa-js-square fa-7x"
              style={{ margin: "auto", color: "#f7df1e " }}
            />

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
          </div>
        </div>
      </div>
    </section>
  </Element>
);

export default AboutMe;

/* const App = () => (
  <div>
    <Label>Basic example</Label>
    <div >
                <div>
          <CircularProgressbar initialAnimation={true} percentage={percentage} text={`${percentage}%`} />
          </div>
    </div> */
