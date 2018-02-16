import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native'
import UdaciDeck from '../Reusable/UdaciDeck'

export default class HomeExistingUser extends Component {
  state = {
    decks: null,
  }
  componentDidMount() {
    let decks = []

    AsyncStorage.getAllKeys()
      .then(keys => {
        keys.map(s => {
          AsyncStorage.getItem(s)
            .then(item => {
              decks.push([s, JSON.parse(item)])
            })
            .catch(err => err)
        })
      })
      .catch(err => err)
    setTimeout(() => {
      this.setState({
        decks
      })
    }, 1000)
  }
  render() {
    const {decks} = this.state
    console.log(decks)
    return (
      decks
      ? <ScrollView contentContainerStyle={styles.container}>
          {decks.map(s => <UdaciDeck key={s[1].title} name={s[1].title} count={s[1].questions.length} />)}
        </ScrollView>
      : <View style={[styles.container, {flex: 1, justifyContent: 'center'}]}>
          <ActivityIndicator size='large' color='red' />
        </View>
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
