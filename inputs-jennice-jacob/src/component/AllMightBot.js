import React, { Component } from 'react'

class AllMightBot extends Component{
    render(){
        return(
            <>
                <h3>AllMightBot</h3>
                <p>{this.props.userInput}. Everything is okay because I AM HERE!!</p>
            </>

        )
    }
}

export default AllMightBot