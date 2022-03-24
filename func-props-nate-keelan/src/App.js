import React, { Component } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Total from './components/Total'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodOrderingApp: ["Apple - $3.00", "Hamburger - $5.00", "Fries - $2.50", "Mustard - $300.19", "Chips - $1.00"],
      cart: []
    }
  }
  
  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }
  render() {
    return(
      <>
        <Header />
        
        <Menu cartItem={this.state.foodOrderingApp} addItem={this.addItem} />
        <h2>Cart:</h2>
        <ul>
          {this.state.cart.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        <Total />

      </>
    )
  }
}
export default App














