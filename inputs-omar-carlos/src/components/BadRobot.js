import React, { Component } from 'react'

class BadRobot extends Component{
  BadRobot = (userInput) => {
    return userInput.toUpperCase()
}
  render(){
    return(
      <>
        <h3> Bad Robot </h3>
        <p>{this.BadRobot(this.props.name)}</p>
      </>
    )
  }
}
export default BadRobot
