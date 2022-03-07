import React, { Component } from 'react'
import List from './components/List.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mcDonalds: ["chicken nuggets", "french fries", "big mac", "sweet tea", "sprite", "mcrib", "mcchicken", "coke"],
      inNOut: ["hamburgers", "animal fries", "milkshakes", "french fries", "double doubles", "fountain drink"],
      cart: []
    }
  }


addItem = (item) => {
  this.setState({cart: [...this.state.cart, item]})
}


render() {
  return(
    <>
    <h1>Order From McDonalds:</h1>
    <List cartItem = {this.state.mcDonalds} addItem={this.addItem} />
    <h1>Order from In-N-Out:</h1>
    <List cartItem = {this.state.inNOut} addItem={this.addItem} />

    <h3>Cart:</h3>
    <ul>
      {this.state.cart.map((item, index) => {
        return <li key={index}>{item}</li>
      }
      )}
    </ul>

    </>
  )
}



}







export default App;
