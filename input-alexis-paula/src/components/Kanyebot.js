import React, {Component} from 'react'

class Kanyebot extends Component{
  kanyebot = (userInput) => {
  return userInput
}

  render(){
    return(
      <>
        <h3>Kanyebot 5000</h3>
          <p>I'm gonna let you finish but Beyonce is {this.kanyebot(this.props.userInput)}.?</p>
      </>
    )
  }
}



export default Kanyebot
