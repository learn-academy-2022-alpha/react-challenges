import React, { Component } from 'react'

export class Kanye extends Component {
  render() {
    return (
      <>
      <h3>Kanye</h3>
      <p>I'm gonna let you finish but Beyonce is {this.props.text.toUpperCase()}</p>
      </>
    )
  }
}

export default Kanye