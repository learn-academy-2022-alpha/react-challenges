import React, { Component } from 'react'
import List from './components/List.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mcDonalds: ["chicken nuggets", "french fries", "big mac", "sweet tea", "sprite", "mcrib", "mcchicken", "coke"],
      inNOut: ["hamburgers", "animal fries", "milkshakes", "french fries", "double doubles", "fountain drink"],
      jackInTheBox: ["tacos", "curly fries", "munchie meal", "iced coffee", "jumbo jack", "crispy chicken strips", "spicy chicken sandwich"],
      // name: [ item: "nuggets", price: 1.00
      //         item: "soda", price: 1.50
      //         item: "big mac", price: 4.50
      //       ],
      cart: [],
      currentCost: 0
    }
  }

// addCost = (item) => {
//   this.setState({currentCost: this.state.name.price})
// }

addItem = (item) => {
  this.setState({cart: [...this.state.cart, item]})
}


render() {
  return(
    <>
    <h1>Order From McDonalds:</h1>
    <List cartItem = {this.state.mcDonalds} addItem={this.addItem}  />
    <h1>Order from In-N-Out:</h1>
    <List cartItem = {this.state.inNOut} addItem={this.addItem} />
    <h1> Order from Jack in the Box </h1>
    <List cartItem= {this.state.jackInTheBox} addItem={this.addItem} />

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
