
   
import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut butter", "Apples", "Goat cheese", "typeof cheese", "Hummus"],
      ralphs: ["Ice cream", "Salmon", "Bread"],
      cart: [],
    price: []
    }
  }

  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }

  render() {
    return(
      <>
        <h1>Terrible InstaCart</h1>
        <h3>Trader's Joes</h3>
        <List cartItem={this.state.traderJoes} addItem={this.addItem} />
        <h3>Ralphs</h3>
        <List cartItem={this.state.ralphs} addItem={this.addItem} />
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