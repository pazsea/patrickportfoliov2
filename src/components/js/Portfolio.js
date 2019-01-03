import React from "react";
import { Element  } from 'react-scroll';
import "../css/portfolio.css";

const Portfolio = (props) => (
  <Element name="portfolio">
    <section>
      <p>Hello!</p>
      <div className="container">
      <Cards {...props}/>
      </div>
    </section>
  </Element>
);

export default Portfolio;
