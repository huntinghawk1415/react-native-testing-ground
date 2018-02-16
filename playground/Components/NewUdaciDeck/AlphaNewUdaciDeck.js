import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, AsyncStorage, TouchableNativeFeedback } from 'react-native'
import { addDeck } from '../../utils/AsyncApi'

export default class AlphaNewUdaciDeck extends Component {
  state = {
    data: null,
    input: null,
  }
  componentDidMount() {
    AsyncStorage.getAllKeys().then(data => this.setState({
      data
    }))
  }
  handleSubmit = () => {
    const {input} = this.state
    input.search(' ') > 0
      ? alert('no spaces please')
      : addDeck(input)
  }
  render() {
    return (
      <View style={[styles.container, styles.containerOne]}>
        {this.state.data
          ? <View style={styles.containerTwo}>
              <Text style={styles.text}>Name of the deck</Text>
              <TextInput
                autoFocus={true}
                onChangeText={(input) => this.setState({
                  input
                })}
                selectionColor={'deepskyblue'}
                underlineColorAndroid={'transparent'}
                style={styles.input}
              />
              <TouchableNativeFeedback onPress={this.handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Save Deck</Text>
                </View>
              </TouchableNativeFeedback>
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
  },
  btn: {
    backgroundColor: 'deepskyblue',
    marginTop: 50,
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
