import React, { Component } from 'react'

class GoodRobot extends Component{
  render(){
    return(
      <>
        <h3> Good Robot </h3>
        <h4> I hear you saying {this.props.userInput}, is that correct? </h4>
      </>
    )
  }
}

export default GoodRobot
