import React from "react";
import { Element } from "react-scroll";
import Cards from "../js/Cards";
import "../css/portfolio.css";

const Portfolio = ({ projects }) => (
  <Element name="portfolio">
    <section className="three">
      <div className="container">
        {projects.map(project => (
          <Cards {...project} key={project.id} />
        ))}
      </div>
    </section>
  </Element>
);

export default Portfolio;
