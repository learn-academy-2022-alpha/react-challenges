import React, { Component } from 'react'

class Roll extends Component {
  render(){
    return(
      <>
      <h3> Your Roll </h3>
      <p> {this.props.roll} </p>
      </>
    )
  }
}



export default Roll;
