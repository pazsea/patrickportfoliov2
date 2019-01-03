import React, {Component} from "react";
import { Element  } from 'react-scroll';
import "../css/welcome.css";



class  Welcome extends Component {

  render() {
    return (
        <Element name="welcome">
        <section>
          <div id="container">
            <h1>Hi! I am Patrick!</h1>
            <img src={require('../pics/me.jpg')} alt="A picture of me" />
            <p>Front End Developer | Ninja Warrior | Citizen </p>
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
            </div>
          </div>
        </section>
        </Element>

    )
  }
}


export default Welcome;
