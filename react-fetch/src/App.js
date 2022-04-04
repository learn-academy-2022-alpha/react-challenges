import React, { Component } from 'react'
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: []
    }
  }

  componentDidMount = () => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(payload => this.setState({ ip: payload }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <h3>
          My current location is {this.state.ip.city} with an IP address of {this.state.ip.ip}
        </h3>
      </>
    )
  }
}

export default App;
