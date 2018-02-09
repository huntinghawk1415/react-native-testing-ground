import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

// TODO: onPress takes you to the create a new deck view (review Udacity navigation for react-native)

export default class HomeNewUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWhite}>Welcome to UdaciCards!</Text>
        <Text style={styles.textWhite}>To get started, tap on the button below</Text>
        <Text style={[styles.textWhite, styles.margin]}>to add a new UdaciDeck</Text>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>New UdaciDeck</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white',
  },
  margin: {
    marginBottom: 40,
  },
  btn: {
    backgroundColor: 'deepskyblue',
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
})
