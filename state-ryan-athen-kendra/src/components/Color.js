import React, { Component } from 'react'
class Color extends Component {
    constructor(props){
        super(props)
        this.state = {
            colors: ["green", "blue", "yellow", "red", "purple", "orange"],
            // greenColor: "green",
            // blueColor: "blue",
            // redColor: "red",
            count: 0
        }
    }
    colorChanger = () => {
      for(let i= 0; i<this.state.colors.length; i++){
      if({count: this.state.count} > 6){
        this.setState({colors: this.state.colors[0]})
      } else{
        this.setState({count: this.state.count + 1})
        this.setState({colors: this.state.colors[this.state.count]})
      }
    }
  }
        // for(let i = 0; i<this.state.colors.length; i++){
        //   if(this.state.colors[i] === "green"){
        //     this.setState({colors:this.state.colors[0]})
        //   } else if(this.state.colors[i] === "blue"){
        //     this.setState({colors:this.state.colors[1]})
        //   } else if(this.state.colors[i] === "yellow"){
        //     this.setState({colors:this.state.colors[2]})
        //   } else if(this.state.colors[i] === "red"){
        //     this.setState({colors:this.state.colors[3]})
        //   } else if(this.state.colors[i] === "purple"){
        //     this.setState({colors: this.state.colors[4]})
        //   } else if(this.state.colors[i]=== "orange"){
        //     this.setState({colors:this.state.colrs[5]})
        //   } else{
        //     i = this.state.colors.length - this.state.colors.length
        //   }
        //   }
        // }







    render() {
      return (
       <>
        <div id="square">
        <p> Color: {this.state.colors} </p>
        <button onClick={this.colorChanger}>
            Click this Button
        </button>
        </div>
       </>
      )
    }
  }




  export default Color
