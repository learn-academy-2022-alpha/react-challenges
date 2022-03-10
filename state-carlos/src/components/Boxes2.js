import React, { Component } from 'react'

class Boxes extends Component{
  constructor(props){
    super(props)
    this.state = {
    count: 0,
    loop: 0,
    color: "white"
    }
  }

  colorCounter = () => {
    let newCount = this.state.count + 1
    let newLoop = newCount % 6
    let colors = ["green", "blue", "yellow", "red", "purple", "orange"]
    let hex = []
    let newColor = colors[newLoop]
    let bgColor = hex[newLoop]
      this.setState({
        count: newCount,
        loop: newLoop,
        color: newColor
      })
  }

  render(){
    let {count} = this.state
    let {loop} = this.state
    let {color} = this.state
    return(
      <>
      <h2>Counter: {count}</h2>
      <h2>Loop: {loop}</h2>
         <button onClick = {this.colorCounter} style="">
      {color}
         </button>
      </>
    )
  }
}

export default Boxes
