import React, { Component } from 'react'

class GoodRobot extends Component{
  render(){
    return(
      <>
        <h3>GoodRobot</h3>
        <p>{this.GoodRobot(this.props.name)}</p>
      </>
    )
  }
}

export default GoodRobot