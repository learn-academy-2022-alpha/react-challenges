import React, { Component } from 'react'
import List from './components/List'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // an array of all the color options
      traderJoes: ["Peanut butter", "Apples", "Goat cheese", "typeof cheese", "Humus"],
      // the current color of the square
      ralphs: ["Ice cream", "Salmon", "Bread"],
      cart: []
    }
  }

addItem = (item) => {
  this.setState({cart: [...this.state.cart, item]})
}

  render(){
    return(
      <>
        <h1> Terrible InstaCart </h1>
        <h3> Trader Joes </h3>
        <List cartItem= {this.state.traderJoes} addItem={this.addItem} />
        <h3> Ralphs </h3>
        <List cartItem= {this.state.ralphs} addItem= {this.addItem} />
        <h3>Cart</h3>
        <ul>
        {this.state.cart.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
        </ul>
      </>
    )
  }
}
export default App
