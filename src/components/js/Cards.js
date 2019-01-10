import React, { Component } from "react";

const API =
  "https://api.github.com/repos/pazsea/patrickportfoliov2/stats/contributors";
class Cards extends Component {
  state = {   };

  componentDidMount() {
    fetch(this.props.api_url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({commit: json[0].total})

      }); 
  }

  render() {
    return (
      <div className="container-all">
        <img src={this.props.url} alt={this.props.alt} />
        <h3>{this.props.head}</h3>
        <p style={{ padding: "20px" }}>{this.props.text}</p>
        <p>{this.state.commit} My</p>
        <button className="readmore">Read More...</button>
      </div>
    );
  }
}

export default Cards;
