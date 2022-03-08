import React, { Component } from 'react'
class Menu extends Component {
  render() {
    return(
      <>
        <ul>
          {this.props.cartItem.map((item, index) => {
            return(
              <li key={index}>
                <button onClick={() => this.props.addItem(item)}>{item}</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Menu