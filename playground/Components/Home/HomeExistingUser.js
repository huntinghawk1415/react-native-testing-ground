import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import UdaciDeck from '../Reusable/UdaciDeck'

// TODO: map through the array of existing lists and return a UdaciDeck for each deck

export default class HomeExistingUser extends Component {
  state = {
    decks: [1, 2, 3, 4, 5]
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.decks.map(s => <UdaciDeck key={s} name={`Deck ${s.toString()}`} count={s * 5} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
})
