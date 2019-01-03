import React from "react";
import { Element  } from 'react-scroll';
import Cards from '../js/Cards';
import "../css/portfolio.css";


const Portfolio = (props) => (
  <Element name="portfolio">
    <section>
      <p>Hello!</p>
      <div className="container">
      {props.projects.map( project => 
        <Cards
          {...project}
          key={project.id}
        />      
      )}
      </div>
    </section>
  </Element>
);

export default Portfolio;
