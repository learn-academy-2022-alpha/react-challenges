import React, { Component } from 'react'

class PreviousRolls extends Component {
  render() {
    return(
      <>
        <h3> Previous Rolls </h3>
        {this.props.previousRolls.map((roll, index) => {
          return <p key = {index}> {roll} </p>
        })}
      </>
    )
  }
}

export default PreviousRolls;
