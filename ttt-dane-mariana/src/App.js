import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'

// 🇺🇸🇧🇷

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      firstTurn: "",
      secondTurn: "",
      isFirstPersonsTurn: true,
      disabled: false,
      winner: ""
    }
  }

  componentDidMount() {
    const firstTurn = Math.round(Math.random())
    if (firstTurn === 0) {
      this.setState({ firstTurn: "🇺🇸", secondTurn: "🇧🇷" })
    }
    else {
      this.setState({ firstTurn: "🇧🇷", secondTurn: "🇺🇸" })
    }
  }

  componentDidUpdate() {
    if (!this.state.disabled) {
      const winner = this.checkForWinner()
      if (winner) {
        this.setState({ winner: winner })
      }
    }
  }

  handleClick = (index) => {
    const { squares, firstTurn, secondTurn, isFirstPersonsTurn } = this.state
    if (this.state.disabled || squares[index] !== "") return
    else {
      const prevBoard = [...squares]
      if (isFirstPersonsTurn) {
        prevBoard[index] = firstTurn
      }
      else {
        prevBoard[index] = secondTurn
      }
      this.setState({ squares: prevBoard, isFirstPersonsTurn: !isFirstPersonsTurn })
    }
  }

  checkForWinner = () => {
    const winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
    for (let i = 0; i < winner.length; i++) {
      const element = winner[i]
      const combo = element.map(value => this.state.squares[value])
      const didWin = combo.every(value => combo[0] !== "" && combo[0] === value)
      if (didWin) {
        this.setState({ disabled: true })
        return combo[0]
      }
    }
  }

  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        {
          this.state.winner ? this.state.winner + " IS THE WINNER!!!" : ""
        }
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square
                key={index}
                index={index}
                value={value}
                handleClick={this.handleClick}
              />
            )
          })}
        </div>

      </>
    )
  }
}
export default App