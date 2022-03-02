import React, { Component } from 'react'


class Square extends Component {
    constructor(props) { 
    super(props)
        this.state = {
            color = ["green", "blue", "yellow", "red", "purple"]
        }
    }
colorChange = () => {
    this.setState({color: this.state.color})
}

  render() {
    return (
     <> 
     <div id="box">
        <button onClick={this.colorChange}>Click Here For A Color!</button>
     </div>
     </>
    )
  }
}

export default Square