import React, { Component } from 'react'

class Restart extends Component{

  refresh = () => {
    return window.location.reload(false)
  }

  render(){
    return(
      <>
     
      <br />
      <div class="button">
      <button class="restart" onClick={this.refresh}>Restart Game</button></div>
      </>
    )
  }
}
export default Restart