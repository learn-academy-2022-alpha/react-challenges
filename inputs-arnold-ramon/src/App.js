import { Component } from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"
import Kanyebot5000 from "./components/Kanyebot5000"

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

  render(){
    return(
      <>
        <h1>hello</h1>
         <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          />
          <GoodRobot/>
          <BadRobot/>
          <Kanyebot5000/>
        <p>{this.state.userInput}</p>
      </>
    )
  }
}
export default App
