import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//takes in a title and a deck size prop (will simulate until truly provided)

// TODO: onPress brings user to deck detail view, preferrably TouchableNativeFeedback button properties when tapped

export default class UdaciDeck extends Component {
  render() {
    const {name, count} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{count}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 25,
    color: 'darkgray',
  }
})
