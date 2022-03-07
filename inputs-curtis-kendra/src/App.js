import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot5000 from './components/KanyeBot5000'


class App extends Component {
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
    let {userInput} = this.state
    return(
      <>
      <h1> Robo Active Listening </h1>
      <input
        type="text"
        value={this.state.userInput}
        onChange={this.handleChange}
      />
      <GoodRobot userInput={userInput} />
      <BadRobot />
      <KanyeBot5000 />
      </>
    )
  }
}









export default App;
