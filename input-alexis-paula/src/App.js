import React, {Component} from 'react'
import Good from './components/Good'
import Bad from './components/Bad'
import Kanyebot from './components/Kanyebot'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {
    userInput: ""
  }
}

handleChange = (e) => {
  console.log(e.target.value)
  this.setState({userInput: e.target.value})
}

blah = () => {

}
  render(){
    return(
      <>
      <h1> Robo Active Listening</h1>
      <input
      type="text"
      value={this.state.userInput}
      onChange={this.handleChange} />
      <Good userInput={this.state.userInput}/>
      <Bad userInput={this.state.userInput}/>
      <Kanyebot userInput={this.state.userInput}/>
      </>
    )
  }
}

export default App
