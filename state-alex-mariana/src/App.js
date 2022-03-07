import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> Square Shape </Text>
        <View style={styles.SquareShape} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  SquareShape: { 
    width: 120,
    height: 120,
    backgroundColor: '#FF9800' 
  },

});