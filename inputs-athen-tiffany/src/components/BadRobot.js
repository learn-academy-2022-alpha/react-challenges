import React, { Component } from 'react'

class BadRobot extends Component{

blaBla = (string) => {
  let split = string.split("")
  // let saying = split.map((value) => {
  //   return value = "BLA"
  // })
  let newArray = []
  for(let i = 0; i<split.length; i++){
    newArray.push("B"+"L"+"A")
  }
    return newArray
  }



  render(){
    return(
      <>
        <h3> Bad Robot </h3>
        <p> {this.blaBla(this.props.userInput2)} </p>
      </>
    )
  }
}


export default BadRobot
