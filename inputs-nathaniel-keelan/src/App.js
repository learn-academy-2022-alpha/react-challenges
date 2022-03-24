import React, { Component } from "react";
import Robots from './components/Robots';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target)
    this.setState({userInput: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Robo Active Listener</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <br></br>
        <h1>Good Robot</h1>
        <p> You said {this.state.userInput}, is that correct? </p>
        <br></br>
        <Robots />
      </>
    );
  }
}

export default App;
