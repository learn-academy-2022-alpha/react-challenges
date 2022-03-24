import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
//import BadRobot from './components/BadRobot'
//import KanyeBot from './components/KanyeBot'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({userInput: e.target.value})
  }

  render(){
    return(
      <>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <GoodRobot name= {this.state.userInput}/>
        <p>{this.state.userInput}</p>
      </>
    )
  }
}
export default App
