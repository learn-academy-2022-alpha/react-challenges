import React, { Component } from 'react'

class Bakugo extends Component{
    
    userStr = (userInput) => {
       let blaArr = ["B", "L", "A"]
        let userArr = userInput.split("").map((a,b) => blaArr[b % blaArr.length])
        return userArr.join("")
    }
    
    
    render(){
        return(
            <>
                <h3>Bakugo</h3>
                <p>{this.userStr(this.props.userInput)}.....SHUT UP!</p>
            </>

        )
    }
}

export default Bakugo