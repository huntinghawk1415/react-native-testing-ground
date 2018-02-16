import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class BlueButton extends Component {
  render() {
    return (
      <View style={styles.btn}>
        <Text style={styles.btnText}>New UdaciDeck</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
