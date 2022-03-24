import React, { Component } from 'react'
import "./App.css"
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue"], counter: 0
    }
  }

changeColor = () => {
  if (this.state.counter > 3){
    this.setState({counter: 0})
  } else {
    this.setState({counter: this.state.counter +1})
  }
}


  render(){
    return(
      <>
        <div onClick={this.changeColor} className = "box" style={{backgroundColor: this.state.colors[this.state.counter]}}>

        </div>
      </>
    )
  }
}

export default App
