import React, { Component } from 'react'

export class Bad extends Component {
    changeText = (text) => {
        const wordChanger = "bla"
        let newStr = ""
        for(let i = 0; i < text.length; i++){
            const idx = i % 3
            newStr += wordChanger[idx]
        }
        return newStr
    }
  render() {
    return (
      <>
      <h3>Bad Robot</h3>
      <p>I hear you saying {this.changeText(this.props.text)}. Is that correct?</p>
      </>
    )
  }
}

export default Bad