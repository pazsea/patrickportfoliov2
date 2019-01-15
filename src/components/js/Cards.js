import React, { Component } from "react";
import Flip from "react-reveal/Flip";

class Cards extends Component {
  state = {};

  componentDidMount() {
    fetch(this.props.api_url)
      .then(res => res.json())
      .then(json => {
        //let cd = new Date(json.commit.committer.date).toLocaleString();
        console.log(json);
        this.setState({
          commit: json.commit
            ? new Date(json.commit.committer.date).toLocaleString()
            : "2019-01-04 13:37"
        });
      });
  }

  render() {
    const { url, alt, head, text, button_url } = this.props;
    return (
      <Flip left>
        <div className="container-all">
          <img src={url} alt={alt} />
          <h3>{head}</h3>
          <p className="text">{text}</p>
          <p />
          <div className="commitDate">
            Lastest commit made:
            <br />
            <em style={{ color: "gold" }}>{this.state.commit}</em>
            <i className="fab fa-github" />
          </div>
          <div className="button">
            <a
              href={button_url}
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
