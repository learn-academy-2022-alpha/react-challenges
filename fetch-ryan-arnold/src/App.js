import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip: null
    }
  }
ipTracker = () => {
  fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(payload => this.setState({ip: payload}))
      .catch(error => console.log(error))
}
render() {
  console.log(this.state)

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={this.ipTracker }>CLICK ME!</button>
        {this.state.ip? <p>{this.state.ip.region}<p>{this.state.ip.ip}<p>{this.state.ip.city}<p>{this.state.ip.country_name}</p></p></p></p>
        :null}
        </>
    )
  }
}
export default App;