// Tic Tac Toe
// This game will be for two users, playing on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

// This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

// User Stories:
// As a user, I should start off seeing a 3x3 grid on the main page.
// As a user, I should be able to click on a square to mark it.
// As a user, my partner should be able to click on a square after me and see their mark.
// As a user, I shouldn't be able to click on a square that has already been selected.
// As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.
// As a user, I should not be able to continue playing the game after the game has been won.
// As a user, if there are no more squares available, I should see a notice telling me that the game has ended.
// As a user, I should see a restart button that when clicked will clear the gameboard.
// Stretch Goals:
// As a user, I can see a notification that informs me whether it is currently player one's or player two's turn.
// As a user, I can choose my marker (X, O, a color, an emoji, etc...).


import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["n", "n", "n", "n", "n", "n", "n", "n", "n"],
      playerOne: "X",
      playerTwo: "O",
    }
  }
  // if player state player one
  // - when click character changes to X
  // - add X to the squares array of that index you clicked
  // - switch state to player two
  // else (player two's turn)
  // - when click character changes to O
  // - add O to the squares array of that index you clicked
  // - switch state to player one

  // win condition function
  // if X meets certain win combinations here (checking the combinations in player one array), then player one wins
  // else if O meets certain win combinations here (checking combinations in player two array) then player two wins
  // else draw

  handleGame = (index) => {
  const {squares} = this.state
    if (squares[index] === "n" || squares[index] === "O" ){
      squares[index] = "X"
      this.setState({squares: squares})
}
    else if ( squares[index] === "X" ){
      squares[index] = "O"
      this.setState({squares: squares})
    }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
          {this.state.squares.map((value,index)=>{
            return(
            <Square
                value = {value}
                index = {index}
                handleGame={this.handleGame}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
