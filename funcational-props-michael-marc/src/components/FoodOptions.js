import React, { Component } from 'react'
class FoodOptions extends Component {
    render() {
        return (
            <>
                <h3>Food</h3>
                <button> {this.props.value}</button>
            </>
        )
    }
}
export default FoodOptions