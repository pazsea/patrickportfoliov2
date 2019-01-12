import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div className="container-all">
        <img src={this.props.url} alt={this.props.alt} />
        <h3>{this.props.head}</h3>
        <p className="text">{this.props.text}</p>
        <p>{/* {this.state.commit}  */}</p>
        <div className="button">
          <button className="readmore">sadad</button>
          <button className="readmore">Read More...</button>
        </div>
      </div>
    );
  }
}

export default Cards;
