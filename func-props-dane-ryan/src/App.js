import React, { Component } from 'react'
import './App.css';
import FoodItems from './components/FoodItems';
import Order from './components/Order';
import Price from './components/Price';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: [
        { item: "hamburger", price: "6.50" },
        { item: "cheeseburger", price: "8.50" },
        { item: "fries", price: "2.00" },
        { item: "shake", price: "4.45" },
        { item: "coke", price: "8.00" },
        { item: "chicken sandwich", price: "14.00" }
      ],
      selectedItems: []
    }
  }

  addItem = item => this.setState({ selectedItems: [...this.state.selectedItems, item] })

  removeItem = index => {
    let currentList = [...this.state.selectedItems]
    currentList.splice(index, 1)
    this.setState({ selectedItems: currentList })
  }

  render() {
    const { foodItems, selectedItems } = this.state
    return (
      <div className="App">
        <FoodItems foodItems={foodItems} addItem={this.addItem} />
        <Order selectedItems={selectedItems} removeItem={this.removeItem} />
        <Price selectedItems={selectedItems} />
      </div>
    );
  }
}

export default App;
