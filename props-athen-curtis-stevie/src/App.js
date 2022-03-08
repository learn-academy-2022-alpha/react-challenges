import React, { Component } from 'react'
import Roll from './components/Roll'
import PreviousRolls from './components/PreviousRolls'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      diceRolls: [1, 2, 3, 4, 5, 6],
      currentRoll: 0,
      previousRolls: []
    }
  }


rollDice = () => {
  let randomNum = Math.floor(Math.random() * this.state.diceRolls.length)
  this.setState({currentRoll: this.state.diceRolls[randomNum],
                previousRolls:[...this.state.previousRolls, this.state.diceRolls[randomNum]]})
}

clearRolls = () => {
  this.setState({previousRolls:[]})
}


render() {
  return(
    <>
      <h1> Dice Roller </h1>
      <button onClick = {this.rollDice}>
          Roll Dice
      </button>
      <button onClick = {this.clearRolls}>
          Clear My Rolls
      </button>
      <Roll roll = {this.state.currentRoll}/>
      <PreviousRolls previousRolls = {this.state.previousRolls} />
    </>
  )
}
}

export default App;
