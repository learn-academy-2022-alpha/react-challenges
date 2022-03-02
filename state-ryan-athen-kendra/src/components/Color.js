import React, { Component } from 'react'
class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: "white"
        }
    }
    colorChanger = () => {
        this.setState({color: this.state.color})
    }

    render() {
      return (
       <>
        <div id="square" onClick={this.colorChanger}>
        </div>
       </>
      )
    }
  }
  
  export default Color