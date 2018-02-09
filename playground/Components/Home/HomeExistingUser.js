import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UdaciDeck from '../Reusable/UdaciDeck'

// TODO: map through the array of existing lists and return a UdaciDeck for each deck

export default class HomeExistingUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UdaciDeck name="Deck One" count={20} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
