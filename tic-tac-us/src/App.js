import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null,  null, null],
      xIsNext: true
    }
  }

handleMoves = (index) => {
  const {squares, xIsNext} = this.state
    squares[index] = xIsNext ? "X": "O"
    this.setState({
      squares: squares,
      xIsNext: !xIsNext
    })
}

winnerPath = () => {
  const {squares} = this.state
  let lines = [
    [squares[0], squares[1], squares[2]],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  render(){
    const winner = this.winnerPath(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
   
    return(
      <>
      <h1>Tic Tac Toe</h1>
      <div id = "ticBoard" >
       
        {this.state.squares.map((value, index) => {
          return (
          <Square 
          value = {value}
          index = {index}
          handleMoves = {this.handleMoves}
          />)
           
        })}
       </div> 
      </>
    )
  }
}
export default App