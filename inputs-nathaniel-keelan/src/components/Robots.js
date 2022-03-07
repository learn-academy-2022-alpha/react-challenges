import { getByPlaceholderText } from "@testing-library/react";
import React, { Component } from "react";

class Robots extends Component {
  badRobot = (userInput) => {
    let bla = ["B", "L", "A"];
    let badArray = userInput.split("").map((value, index) => {
      return bla[index % bla.length];
    });
    return badArray;
  };

  render() {
    return (
      <>
        <h1>Bad Robot</h1>
        <p> I think you said {this.badRobot(this.props.userInput)}, right?</p>
        <br></br>
        <h1>Another Robot</h1>
        <p>{this.props.userInput}</p>
        
      </>
    );
  }
}

export default Robots;
