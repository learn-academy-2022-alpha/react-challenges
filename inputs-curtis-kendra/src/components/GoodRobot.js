import React, { Component } from 'react'

class GoodRobot extends Component {

// userOutput = (userInput) => {
//   return userInput
// }

  render(){
    return(
      <>
        <h2>Good Robot</h2>
        <p>I hear you saying {this.props.userInput}. Is that correct?</p>
      </>
    )
  }
}


export default GoodRobot
