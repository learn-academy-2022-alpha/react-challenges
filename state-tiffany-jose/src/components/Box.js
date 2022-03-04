import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors : ["red", "blue", "orange", "green", "yellow", "purple"],
      currentColor: 0
    }
  }

  colorChange() {
    var {colors, currentColor } = this.state
    this.setState({currentColor: currentColor +1})
    if (currentColor === colors.length -1){
      this.setState({currentColor: 0})
    }
  }

  render() {
    const {colors, currentColor} = this.state
    return(
      <>
      <div class="box1" onClick={this.colorchange} style={{backgroundColor: colors[currentColor]}}>Click to change colors</div>
      <button class="add" onClick={this.addBox}>Add a box</button>
      <button class="remove" onClick={this.removeBox}>Remove a box</button>
      </>
    )
  }
}

export default App
