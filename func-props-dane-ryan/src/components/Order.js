import React, { Component } from 'react'
import { MdFastfood } from 'react-icons/md'

export class Order extends Component {
    render() {
        return (
            <>
                <h3>Your Order</h3>
                <ul>
                    {
                        this.props.selectedItems.map((item, i) => (
                            <li onClick={() => this.props.removeItem(i)} key={i}>
                                <MdFastfood />
                                {item.item} ${item.price}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default Order