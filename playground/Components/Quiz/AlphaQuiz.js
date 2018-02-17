import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class AlphaQuiz extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator animating={true} size='large' color='red' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
