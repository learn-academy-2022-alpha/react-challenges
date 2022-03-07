import React, { Component } from 'react'

class BadRobot extends Component{
  render(){
    return(
      <>
        <h3>BadRobot</h3>
        <p>{this.BadRobot(this.props.name)}</p>
      </>
    )
  }
}

export default BadRobot