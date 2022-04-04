import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      location: null,
    }
  }
  componentDidMount(){
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => this.setState({location: payload}))
      .catch(error => console.log(error))
  }
  render(){
    
    return(
    <>
    <h1></h1>
    {this.state.location?<p> Your currency is {this.state.location.currency}
    <p> You live in  {this.state.location.region}</p></p>:null}
    
    </>
    )
  }

}

export default App;
