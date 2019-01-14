import React, { Component } from "react";
import Flip from "react-reveal/Flip";

class Cards extends Component {
  state = {};

  componentDidMount() {
    fetch(this.props.api_url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          commit: json.commit.committer.date
        });
      });
  }

  render() {
    return (
      <Flip left>
        <div className="container-all">
          <img src={this.props.url} alt={this.props.alt} />
          <h3>{this.props.head}</h3>
          <p className="text">{this.props.text}</p>
          <p />
          <div className="commitDate">
            Lastest commit made:
            <br />
            <em style={{ color: "whitesmoke" }}>{this.state.commit} </em>
            <i className="fab fa-github" />
          </div>
          <div className="button">
            <a
              href={this.props.button_url}
              target="_blank"
              className="readmore"
              without="true"
              rel="noopener noreferrer"
            >
              View Github repo
            </a>
          </div>
        </div>
      </Flip>
    );
  }
}

export default Cards;
