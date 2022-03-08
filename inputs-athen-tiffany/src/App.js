import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot.js'
import BadRobot from './components/BadRobot.js'
import NervousRobot from './components/NervousRobot.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }


handleChange = (e) => {
  this.setState({userInput: e.target.value})
}

render(){
  return(
    <>
      <input
        type = "text"
        value = {this.state.userInput}
        onChange = {this.handleChange}
      />
      <GoodRobot userInput={this.state.userInput} />
      <BadRobot userInput2={this.state.userInput} />
      <NervousRobot userInput3={this.state.userInput} />
    </>
  )
}
}


export default App;
