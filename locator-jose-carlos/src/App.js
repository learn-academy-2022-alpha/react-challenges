import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor(props) {

      var today = new Date(), 
          time = today.getHours() + ' hrs' + today.getMinutes() + ' mins ' + today.getSeconds() + ' sec';
        
        super(props)
        this.state = {
            currentLocation: null,
            currentTime: time
        }
    }

    fetchLocation = () => {
        fetch("https://ipapi.co/8.8.8.8/json/")
        .then(response => response.json())
        .then(payload => this.setState({currentLocation: payload}))
        .catch(error => console.log(error))
    }

    render(){
          console.log(this.state);
        return(
            <>
            <h1>Locator App</h1>
            <button onClick={this.fetchLocation}>Click to view location</button>
            {this.state.currentLocation?
            <p> Your currently at: {this.state.currentLocation.city}, {this.state.currentLocation.region}
            <p>Your IP address: {this.state.currentLocation.ip}
            <p>Your grid locations are: [{this.state.currentLocation.latitude}, {this.state.currentLocation.longitude}]
            <p>Secret Agents will be coming to get you: {this.state.currentTime} </p>
            </p></p></p> : null }
            </>
        )
    }
}

export default App