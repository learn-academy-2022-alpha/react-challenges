import React, { Component } from 'react'

class App extends Component{
 
    badRobot = (string) => {
        var arr = ["B","L","A","H"]
        var newArr = string.split("").map((value,index)=> {
            return arr[index % arr.length]
        })
return newArr 
    }

  render(){
    return (
      <>
     <h2>Good Robot</h2>
<p>I hear you saying {this.props.userInput}. Is that correct?</p>

     <h2>Bad Robot</h2>
     <p>I hear you saying {this.badRobot(this.props.userInput)}. Is that correct?</p>


     <h2>Kanyebot 5000</h2>
     <p>I'm gonna let you finish but Beyonce is {this.props.userInput}</p>


      </>
    )
  }
}
export default App
