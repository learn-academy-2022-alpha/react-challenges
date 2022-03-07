import React, { Component } from 'react'

class List extends Component {
    render(){
        return(
            <>
            <ul>
            {this.props.cartItem.map((item, index) => {
             return(
             <li key={index}>
                 <button onClick = { ()=> this.props.addItem(item)}> {item}</button>
                 </li>

             )}
            )}

            </ul>
            </>
        )
    }



}






export default List