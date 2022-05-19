import React, {Component} from "react";



class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            color:""

        }
    }
    addColor=()=>{
        this.setState({color:"white"})
    }
  render() {
    return (
        <button onClick={this.state.addColor}>Add new color{this.state.color}</button>
     
    )
  }
}

export default Main