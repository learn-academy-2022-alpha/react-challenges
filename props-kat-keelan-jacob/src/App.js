import React, { Component } from 'react'
import NumberLog from './component/NumberLog'
import "./App.css"
import LeftDice from './component/LeftDice'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numbers: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
      ],
      currentNumber: "",
      previousNumbers:[]
    }
  }
  diceRoll = () => {
    let randomNumber = Math.floor(Math.random() * this.state.numbers.length)
    this.setState({
      currentNumber: this.state.numbers[randomNumber],
      previousNumbers: [...this.state.previousNumbers, this.state.numbers[randomNumber]]
    })
  }
  render(){
    return(
        <>
          <LeftDice
              rollDice={ this.diceRoll }
              Number number={this.state.nextNumber}
          />
          <NumberLog
              PreviousNumbers previousNumbers={this.state.previousNumbers}
          />
        </>
    )
  }
}
export default App