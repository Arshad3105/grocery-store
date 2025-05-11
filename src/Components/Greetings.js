import React, { Component } from "react";

class Greetings extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name} belongs to {this.props.department}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Greetings
