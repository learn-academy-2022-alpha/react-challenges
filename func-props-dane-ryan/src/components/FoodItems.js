import React, { Component } from 'react'
import { MdMenuBook } from 'react-icons/md'

export class FoodItems extends Component {
    render() {
        return (
            <>
                <h3>Menu</h3>
                <ul>
                    {
                        this.props.foodItems.map((item, i) => (
                            <li onClick={() => this.props.addItem(item)} key={i}><MdMenuBook />{item.item} ${item.price}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default FoodItems