import React, { Component } from "react"



class BadRobot extends Component {

    badRobot = (string) => {
        let blah = ["B", "L", "A"]
        return string.split("").map((value, index) => {
            return blah[index % blah.length]
        })
    }
    render() {
        return(
            <>
            <h3>Bad Robot</h3>
            <h6>I hear you saying {this.badRobot(this.props.badRobot)}, is that correct?</h6>
            </>
        )
    }
}
export default BadRobot