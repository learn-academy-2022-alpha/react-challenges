import React, { Component } from 'react'

class Total extends Component{
    totalPrice = (addItem) => {
        let menuItems = ["Apple", "Hamburger", "Fries", "Mustard", "Chips"]
        let menuPrices = [3.00, 5.00, 2.50, 300.19, 1.00]
            return this.totalPrice + this.menuPrices
    }


  render(){
    return(
      <>
        <h3>Total:</h3>
        {this.totalPrice}
      </>
    )
  }
}

export default Total