import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    this.props.handleGame(this.props.index)
  }
  render(){
    return(
      <>
        <div className="square" onClick={this.handleClick}>
            X
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
