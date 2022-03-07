import React, { Component } from "react"

class GoodRobot extends Component {
    render() {
        return(
            <>
            <h3>Good Robot</h3>
            <h6>I hear you saying {this.props.goodRobot}. Is that correct?</h6>
            </>
        )
    }
}
export default GoodRobot