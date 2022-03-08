// Challenge
// As a developer, I am tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

// As a user, I can see an application that has a list of food items and the price of each item
// As a user, I can select an item I wish to order
// As a user, I can see the items I have selected displayed on the page

// Stretch Challenges
// As a user, I can see the total cost of my current order
// As a user, I can see both the base total of my food selections and the total that includes sales tax
// As a user, I can see the total that includes sales tax rounded to two decimals
// As a user, I can see an image of my food selection on the menu

import React, { Component } from 'react'
import GroceryList from './components/GroceryList'

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        foodArray:["ramen","wagyu beef","gyoza","slice of cheesecake","chips","hi-chew","coca cola"],
        // foodArray:[{
        //   item: "ramen",
        //   price: 5 },
        //   {  
        //   item: "wagyu beef",
        //   price: 200 },
        //   {
        //   item: "gyoza",
        //   price: 8 },
        //   {
        //   item: "slice of cheesecake",
        //   price: 5 }],
        cart: [],
        totalPrice: 0
  }
}

addItem = () => {
  this.setState ({
    cart: [...this.state.cart,item]
  })
}
// addPrice = (price) => {
//   this.setState ({ 
//   totalPrice: totalPrice + 1,
//   })
//   console.log(totalPrice)
// }

render(){
  return (
    <>
    <h1>Grocery List</h1>
    < GroceryList cartItem={this.state.foodArray} addItem={this.addItem} />
    <h1>Add to Cart</h1>
    <ol>
      {this.state.cart.map((item,index)=>{
        return <li key={index}>{item}
        </li>
      })}
    </ol>
    </>
  )
}
}

export default App
