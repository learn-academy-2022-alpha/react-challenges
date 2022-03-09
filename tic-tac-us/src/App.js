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

  render(){
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