import React, { Component } from 'react'

class Dice extends Component{
    constructor(props){
      super(props)
      this.state = {
        diceNumbers: [1, 2, 3, 4, 5, 6],
        // currentRoll: ""
      }
    }

    rollingTheDice = () => {
      let dice = Math.floor(Math.random() * this.state.diceNumbers.length)
      // this.setState({currentRoll: currentRoll})
    }
  render(){
    return(
      <>
      </>
    )
  }
}

export default Dice
