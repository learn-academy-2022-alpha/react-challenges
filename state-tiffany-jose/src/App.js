import React, { Component } from 'react'
import Box from './components/Box'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      diffColors: []
    }
  }
  addBox = () => {
    var {diffColors} = this.state
    this.setState({diffColors: [...diffColors, <Box/>] })
  }

  removeBox = () => {
    var {diffColors} = this.state
    diffColors.pop()
    this.setState({diffColors: diffColors})
  }

  render() {
    return(
      <>
      <Box />
      </>
    )
  }
}

export default App
