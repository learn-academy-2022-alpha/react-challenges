import React, { Component } from 'react'
import FoodOptions from './components/FoodOptions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: ["beer", "pizza", "chips", "cookies"],
      currentFood: ""
    }
  }

  render() {
    let food = this.state.food.map((value, index) => {
      return (
        <FoodOptions
          value={value}
          key={index}
        />
      )
    })
    return (
      <>
        <h1>Even Worse InstaCart</h1>
        <FoodOptions />
      </>
    )
  }
}

export default App

