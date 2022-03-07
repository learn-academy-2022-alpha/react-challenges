import React, { Component } from 'react'

class KanyeBot extends Component{
  BadRobot = (userInput) => {
    return userInput.toUpperCase()
}
  render(){
    return(
      <>
        <h3> Good Robot </h3>
        <p>{this.KanyeBot(this.props.name)}</p>
      </>
    )
  }
}
export default KanyeBot
