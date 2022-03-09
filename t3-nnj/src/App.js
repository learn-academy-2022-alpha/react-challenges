import React from 'react';
import "./App.css";

/** Pseudo
 * Create function to calculate the next value/turn of which player goes next
 * Set squares as a parameter to pass in
 * Utilize for loop filtering through the number of squares and using % 2 === 0 to determine which player 'x' or 'o' goes next.
 * Return statement will alternate between 'x' and 'o'
 *
 * Function determining the progression of the game
 * Checks to see if current player has any 'winning' combinations
 * If yes, declare winner if not next players turn
 * If all squares are chosen and no player has any winning combinations , return 'tie game'
 *
 * Board Component
 * Dynamically generate 3x3 game board
 * Add onClick function to select square for current player
 * Set up <div>'s for each row
 *
 * Restart button
 * onClick function to reset page
 *
 *Extra notes:
 * Each player designated an empty array.
 * As squares are chosen, square number/index is added to that players array.
 * Players array checked against winning combinations.
 *
 *
 *
 /** ----------------------------------------------------------------------- **/
function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill())
  const playerTurn = calculateNextValue(squares)
  const winner = winningCombinations(squares)
  const turn = gameProgression(winner, squares, playerTurn)
/** ----------------------------------------------------------------------- **/


  function selectSquare(square) {
    if (winner || squares[square]) {
      return
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = playerTurn
    setSquares(squaresCopy)
  }
/** ----------------------------------------------------------------------- **/
  function restart() {
    setSquares(Array(9).fill())
  }
/** ----------------------------------------------------------------------- **/
  function createSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>{squares[i]}</button>
    )}

  return (
    <div>
      <div className="status"><span>{turn}</span></div>
      <div className="row">{createSquare(0)}{createSquare(1)}{createSquare(2)}</div>
      <div className="row">{createSquare(3)}{createSquare(4)}{createSquare(5)}</div>
      <div className="row">{createSquare(6)}{createSquare(7)}{createSquare(8)}</div>

        <button className="restart" onClick={restart}>Play Again!</button></div>)}
/** -----------------------------------------------------------------------
 *
 *
 *
 *
 *
 *
 *
 * **/
        
function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}
/** -----------------------------------------------------------------------
 * The gameProgression function utilizes the ternary operator ? to check
 the condition if a player has any of the winning combinations and
 dictate the progression of the game. If all squares are occupied with
 no winner than the game is declared a draw. If the winning combination
 condition is not met and there are still squares unoccupied then the
 game progresses to the next players turn.
 */

function gameProgression(winner, squares, nextTurn) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Draw!`
    : `Player Turn: ${nextTurn}`
}

/** -----------------------------------------------------------------------
 * The winningCombination function determines if a player has any of the
 following square combinations.If so, the player is declared the winner
 following the gameProgression logic
 */
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}
 /** -----------------------------------------------------------------------
 * The winningCombination function determines if a player has any of the
  following square combinations.If so, the player is declared the winner
  following the gameProgression logic
 */
function winningCombinations(squares) {
  const lineCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lineCombos.length; i++) {
    const [a, b, c] = lineCombos[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return ''
}
 /** -----------------------------------------------------------------------**/
function App() {
  return <Game />
}

export default App