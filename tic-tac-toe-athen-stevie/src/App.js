import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      currentPlayerTurn: true
      // This is set to true and once player1 has made a click, set it to false with a function
    }
  }

// switchTurns = () => {
//   const { currentPlayerTurn } = this.state
//   if(currentPlayerTurn === true) {
//     currentPlayerTurn = false
// }
// }


gamePlay = (index) => {
  const { squares, currentPlayerTurn } = this.state
  squares[index] += 1
  if(squares[index] === 1){
    squares[index] = "🅾️"
    //this.switchTurns()
    this.setState({currentPlayerTurn: currentPlayerTurn})
    this.setState({squares: squares})
  } else{
    squares[index] = "❌"
    //this.switchTurns()
    this.setState({currentPlayerTurn: currentPlayerTurn})
    this.setState({squares:squares})
  }

console.log(squares)
}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className = "gameBoard">
        {this.state.squares.map((value, index) => {
          return( <Square  value = {value}
                          index = {index}
                          gamePlay = {this.gamePlay}
                          //switchTurns = {this.switchTurns}
          />
        )
        })}
        </div>
      </>
    )
  }
}
export default App
