import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      locations : null
    }
  }

fetchPapi = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  //.then(payload => console.log(payload))
  .then(payload => this.setState({locations: payload}))
  .catch(error => console.log(error))

}

  render() {
    console.log(this.state)

    return(
      <>
        <h1>Hello World</h1>
        <button onClick={this.fetchPapi}>Click for Location!</button>
      <div>
        
      {this.state.locations?
       <p>Your IP is here: {this.state.locations.ip} which is in the City: {this.state.locations.city} </p>: null}
      </div>
      </>
    )
  }
}

export default App;