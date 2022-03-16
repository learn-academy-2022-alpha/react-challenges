import React, { Component } from 'react'

class Square extends Component{
    render(){
        return(
            <>
                <div className="square"></div>
            </>
        )
    }
}
export default Square


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
 *
 * Restart button
 * onClick function to reset page
 *
 * **/


