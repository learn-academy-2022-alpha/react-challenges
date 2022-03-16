import React, { Component } from 'react'

class Menu extends Component{

  render(){
    return(
      <>
      <h2>Food Menu</h2>
      <ul>
      {this.props.menu.map((item,index) => {
        return <li key={index}>
        {item.food} - ${item.price}
        <button onClick={() => {this.props.addFood(item)}}>Order</button>
        </li>
      })}
      </ul>
      </>
    )
  }
}

export default Menu
