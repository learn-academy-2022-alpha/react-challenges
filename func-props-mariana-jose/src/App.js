import React, { Component } from 'react'
import Menu from './components/Menu'
import Order from './components/Order'


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      menu: [{food: "Steak", price: 20},
      {food: "Chicken", price: 15},
      {food: "BBQ Ribs", price: 20},
      {food: "Salmon", price: 15},
      {food: "Beans", price: 3},
      {food: "Rice", price: 3,},
      {food: "Mash Potatoes", price: 5},
      {food: "Brussle Sprouts", price: 3},
      {food: "Ceasar Salad", price: 5}],

      cart: [],
      price: 0

    }
  }
    addFood = (item) => {
      this.setState({cart: [...this.state.cart, item]})
    }

  render(){
    return(
      <>
      <h1>Jose & Mariana Restaurant</h1>
      <Menu menu = {this.state.menu} addFood = {this.addFood}/>
      <h2>Current order:</h2>
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



// As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.
//
// As a user, I can see an application that has a list of food items and the price of each item
// As a user, I can select an item I wish to order
// As a user, I can see the items I have selected displayed on the page
// Stretch Challenges
// As a user, I can see the total cost of my current order
// As a user, I can see both the base total of my food selections and the total that includes sales tax
// As a user, I can see the total that includes sales tax rounded to two decimals
// As a user, I can see an image of my food selection on the menu
