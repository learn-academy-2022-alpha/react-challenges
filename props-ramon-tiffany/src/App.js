import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      diceSides: [1, 2, 3, 4, 5, 6],
      currentRoll: "",
      //previousRoll: [],
    }
  }

newRoll = () => {
  let randomNumber = Math.floor(Math.random() * this.state.diceSides.length)
  this.setState({
    currentRoll: this.state.diceSides[randomNumber],
  })
}


  render(){
    return(){
      <>
      <h1> Dice Roll</h1>
      <button onClick={this.newRoll}>Request for Roll</button>
      </>
    }
  }
}

export default App