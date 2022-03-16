import React, { Component } from 'react'
import "../App.css"


class NumberLog extends Component{
    render(){
        return(
            <>
                <div id='rightDice'>
                    <h1>{ this.props.number }</h1>
                    {this.props.previousNumbers.map((number, index) => {
                        return <p key={index}>{number}</p>
                    })}
                </div>
            </>
        )
    }
}

export default NumberLog