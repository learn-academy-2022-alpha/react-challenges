import React, {Component} from 'react'

class Good extends Component{
  good = (userInput) => {
  return userInput
}

  render(){
    return(
      <>
        <h3>Good Robot</h3>
        <p>I hear you saying {this.good(this.props.userInput)}. Is that correct?</p>
      </>
    )
  }
}



export default Good
