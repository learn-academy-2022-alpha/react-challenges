import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
     <View style={styles.square}></View>
    )
  }
}

const styles = {
  square: {
    width: '50px',
    height: '50px',
  }
}
export default Box
