import React, {Component} from 'react'

class Bad extends Component{


  bad = (string) => {
let arr = string.split("")
console.log(arr);
  let placeholder = []
  for(let i = 0; i < arr.length; i++){
    placeholder.push("B" + "L" + "A")
  }
  return placeholder
}


  render(){
    return(
      <>
        <h3>Bad Robot</h3>
        <p>I hear you saying {this.bad(this.props.userInput)}. Is that correct?</p>
      </>
    )
  }
}



export default Bad
