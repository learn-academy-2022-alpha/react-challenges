import React, { Component } from 'react'

class Square extends Component{

click = () => {
    this.props.ticTac(this.props.index)
}

  render(){
    return(
      <>
        <div className="square" onClick={this.click}>
            {this.props.value}
        </div>
      </>
    )
  }
}
export default Square