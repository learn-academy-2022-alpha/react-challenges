import React, { Component } from 'react'
class Price extends Component {

    getTotalPrice = () => {
        if (this.props.selectedItems.length > 0) {
            let price = this.props.selectedItems.map(item => parseFloat(item.price)).reduce((a, b) => a + b)
            let tax = price * 0.04
            const basePrice = this.formatPrice((price).toFixed(2))
            const priceWithTax = this.formatPrice((price + tax).toFixed(2))
            return (
                <>
                    <h3>Total</h3>
                    <p>{basePrice}</p>
                    <h3>Checkout</h3>
                    <p>{priceWithTax}</p>
                </>
            )
        } else {
            return (
                <>
                    <p>Nothing ordered yet...</p>
                </>
            )
        }
    }

    formatPrice = (price) => {
        if (price.toString().includes(".")) {
            if (price.toString().split(".")[1].length === 1) {
                price += "0"
            }
        } else {
            price += ".00"
        }
        return `$${price}`
    }

    render() {
        return (
            <>
                {this.getTotalPrice()}
            </>
        )
    }
}

export default Price