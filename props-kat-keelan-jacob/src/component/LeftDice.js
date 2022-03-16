import React, { Component } from 'react'
import "../App.css"
import dice from './dice.png'

class LeftDice extends Component{
    render(){
        return(
            <div id='leftDice'>
                <div id='smallDice'  style={{ backgroundImage: `url(${dice})` }} 
                     onClick={ this.props.rollDice }></div>
            </div>
        )
    }
}
export default LeftDice



