import React, { Component } from 'react'

class Button extends Component{
  render(){
    return(
      <>
        <button onClick = {this.prop.rollingTheDice}>Click to Roll Dice</button>
      </>
    )
  }
}

export default Button
