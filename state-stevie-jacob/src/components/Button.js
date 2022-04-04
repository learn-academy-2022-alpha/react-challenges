import React, { Component } from 'react'

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    addBox = () => {

    }

    render(){
        return(
            <>
                <a href="something" className="button1">Add</a>
                <a href="something" className="button1">Remove</a>
            </>
        )
    }
}
export default Button