import React from "react";
import { Element } from "react-scroll";
import Cards from "../js/Cards";
import "../css/portfolio.css";

const Portfolio = props => (
  <Element name="portfolio">
    <section className="three">
      <div className="container">
        {props.projects.map(project => (
          <Cards {...project} key={project.id} />
        ))}
      </div>
    </section>
  </Element>
);

/* class Portfolio extends React.Component {


    onEnterViewport() {
    this.setState({
      visible: true,
    });
  }
 
  onExitViewport() {
    this.setState({
      visible: false,
    });
  }

  render() {
        const {
      visible,
    } = this.state;
 
    return (
      <Element name="portfolio">
        <section className="three">
          <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport} >
            {" "}
            <div className={`container ${visible ? 'container-animate' : ''}`}>
              {props.projects.map(project => (
                <Cards {...project} key={project.id} />
              ))}
            </div>
          </ScrollTrigger>
        </section>
      </Element>
    );
  }
} */

export default Portfolio;
