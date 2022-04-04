import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
require('dotenv').config()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      photos: null
    }
  }
  componentDidMount() {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => this.setState({ location: payload }))
      .catch(error => console.log(error))
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response => response.json())
      .then(payload => this.setState({ photos: payload.photos }))
  }
  render() {
    return (
      <>
        {this.state.location ? <p> Your currency is {this.state.location.currency}
          <p> You live in  {this.state.location.region}</p></p> : null}
        <h1>Some Pictures of Dirt</h1>
        {
          this.state.photos ?
            <>
              {
                this.state.photos.map((value, i) => (
                  <img key={i} src={value.img_src} alt="" style={{ width: '300px' }} />
                ))
              }
            </> : null
        }

      </>
    )
  }
}

export default App;
