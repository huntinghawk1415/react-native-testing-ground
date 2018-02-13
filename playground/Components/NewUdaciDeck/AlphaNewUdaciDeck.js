import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native'

export default class AlphaNewUdaciDeck extends Component {
  state = {
    data: null,
  }
  componentDidMount() {
    AsyncStorage.getAllKeys().then(data => this.setState({
      data
    }))
  }
  render() {
    return (
      <View style={[styles.container, styles.containerOne]}>
        {this.state.data
          ? <View style={[styles.container, styles.containerTwo]}>
              <Text style={styles.text}>Name of the deck</Text>
              <TextInput
                autoFocus={true}
                selectionColor={'deepskyblue'}
                underlineColorAndroid={'transparent'}
                style={styles.input}
              />
            </View>
          : <Text>Hello! This is the screen for a new UdaciDeck!</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
  },
  containerOne: {
    alignItems: 'center',
  },
  containerTwo: {
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: 300,
    marginTop: 15,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'deepskyblue'
  }
})
