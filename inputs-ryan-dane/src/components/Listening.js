import React, { Component } from 'react'
import Bad from './Bad'
import Good from './Good'
import Kanye from './Kanye'

export class Listening extends Component {
    constructor(props){
        super(props)
        this.state ={
            text: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
  render() {
    return (
      <>
      <input type="text" placeholder="Enter your text"
      onChange={this.handleChange}
      value={this.state.text}
      />
      <Good text={this.state.text}/>
      <Bad text={this.state.text}/>
      <Kanye text={this.state.text}/>
      </>
    )
  }
}

export default Listening