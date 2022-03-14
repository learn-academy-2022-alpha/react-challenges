import React, {Component} from 'react'
import BadRobot from './components/BadRobot'
import GoodRobot from './components/GoodRobot'
import RobotTheGreat from './components/RobotTheGreat'

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
      gRobot: '',
      bRobot: '',
      kRobot: ''
    }
  }
  handleChange = (e) => {
  
    this.setState({gRobot: e.target.value})
    this.setState({bRobot: e.target.value})
    this.setState({kRobot: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Robot Active Listening</h1>
        <h3>Say Something</h3>
        <input
          type='text'
          onChange={this.handleChange}
        />
        <GoodRobot goodRobot={this.state.gRobot} />
        <BadRobot badRobot={this.state.bRobot} />
        <RobotTheGreat kRobot={this.state.kRobot} />

      </>
    )
  }
}

export default App