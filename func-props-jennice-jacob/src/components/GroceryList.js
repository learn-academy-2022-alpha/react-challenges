import React, { Component } from 'react'

class GroceryList extends Component {
    render(){
        return(
            <>
            {this.props.cartItem.map((item,index) => {
            return(
                <li key={index}>
                <button onClick={() => {this.props.addItem(item)}}>{item}</button>
                </li>
            )})}    
            </>
        )
        }
    }

export default GroceryList 