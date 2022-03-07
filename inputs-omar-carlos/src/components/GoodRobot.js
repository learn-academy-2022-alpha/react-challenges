import React, { Component } from 'react'

class GoodRobot extends Component{
goodRobot = (userInput) => {
  return userInput
}

  render(){
    return(
      <>
        <h3> Good Robot </h3>
        <p>{this.goodRobot(this.props.name)}</p>
      </>
    )
  }
}
export default GoodRobot
