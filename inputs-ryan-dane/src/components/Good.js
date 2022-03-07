import React, { Component } from 'react'

export class Good extends Component {
  render() {
    return (
      <>
      <h3>Good Robot</h3>
      <p>I hear you saying {this.props.text}. Is that correct?</p>
      </>
    )
  }
}

export default Good