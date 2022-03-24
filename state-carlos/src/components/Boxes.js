import React, { Component } from 'react'

class Boxes extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: "White"
    }
  }
  let colors = ["Green", "Blue", "Yellow", "Red", "Purple", "Orange"]
  colorChanger(){

  }

  render(){
    let {count} = this.state
    

    return(
      <>
        <h2>Counter: {count}</h2>
        <button onClick={this.handleChange}>
          Press Me!
        </button>
      </>
    )
  }
}

export default Boxes