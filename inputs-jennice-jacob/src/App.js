import React, { Component } from 'react'
import AllMightBot from './component/AllMightBot'
import Bakugo from './component/Bakugo'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            userInput: ""
        }
    }

    handleChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({userInput: e.target.value})
    }

    render(){
        let {userInput} = this.state
        return(
            <>
                <h1>Robo Active Listening</h1>
                <p>Say Something</p>
                <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                <h3>Nezu</h3>
                <p>I hear you saying {this.state.userInput}. Is that correct?</p>

                <AllMightBot userInput={userInput}/>

                <Bakugo userInput={userInput}/>
            </>
        )
    }
}
export default App
