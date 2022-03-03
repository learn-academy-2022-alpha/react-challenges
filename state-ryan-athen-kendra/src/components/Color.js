import React, { Component } from 'react'
class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
            colors: ["green", "blue", "yellow", "red", "purple", "orange"]
            count: 0
        }
    }
    colorChanger = () => {
      if(count > 5){
        this.setState({this.state.colors[0]})
      } else{
        this.setState({count: this.state.count + 1})
      }
    }

    render() {
      return (
       <>
        <div id="square"
        <button onClick={this.colorChanger}>
            Click this Button
        </button>
        </div>
       </>
      )
    }
  }

  export default Color
