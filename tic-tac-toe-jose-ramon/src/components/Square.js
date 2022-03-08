import React, { Component } from 'react'

class Square extends Component{

click = () => {
    alert("ay")
}

  render(){
    return(
      <>
        <div className="square" onClick={this.click}>{this.props.value}
        </div>
      </>
    )
  }
}
export default Square