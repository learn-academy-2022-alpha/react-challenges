import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <>
        <div className="square" onClick = {this.props.handleChange}></div>
      </>
    )
  }
}
export default Square
