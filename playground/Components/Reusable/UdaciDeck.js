import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

//takes in a title and a deck size prop (will simulate until truly provided)

export default class UdaciDeck extends Component {
  render() {
    const {name, count, method} = this.props
    return (
      <TouchableOpacity onPress={() => method(name, count)} style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{count}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 25,
    color: 'darkgray',
  }
})
