import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip: null,
      city: null
            };
  }
      
    
  


componentDidMount = () => {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(payload => {
      console.log(payload)
      console.log(payload.ip)
      console.log(this.state)
      this.setState({ip: payload.ip, city: payload.city})
      console.log(this.state)
    })
    .catch(error => console.log(error))
}

render(){
    return (
      <>
        <h1>We found you!</h1>
          <button onClick={this.componentDidMount}>CLICK ME!</button>
            <p>{this.state.ip}</p>
            <p>{this.state.city}</p>
      </>
    )
  }
}

export default App;

