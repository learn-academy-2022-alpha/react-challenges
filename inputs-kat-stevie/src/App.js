import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Header from './component/Header'


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends Component{
  constructor(props)}
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
    return (
      <>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <p>{this.state.userInput}</p>
      </>
    )
  }
}


export default App
