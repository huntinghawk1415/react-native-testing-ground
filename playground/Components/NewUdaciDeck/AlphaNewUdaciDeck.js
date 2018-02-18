import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, AsyncStorage, TouchableNativeFeedback } from 'react-native'
import { addDeck } from '../../utils/AsyncApi'

export default class AlphaNewUdaciDeck extends Component {
  state = {
    input: '',
    keys: null,
  }
  componentDidMount() {
    AsyncStorage.getAllKeys()
      .then(keys => this.setState({
        keys
      }))
  }
  handleSubmit = () => {
    const {input, keys} = this.state
    input.search(' ') > 0 || input.length < 1 || keys.filter(s => s === input).length > 0
      ? alert(`Please enter a valid name (${input.length < 1 || keys.filter(s => s === input).length > 0 ? `you can't save a deck with ${input.length < 1 ? 'no' : 'an already used'} name` : "no spaces"})`)
      : addDeck(input)
    ;if(input.search(' ') < 0 && input.length > 0 && keys.filter(s => s === input).length < 1) {
      this.props.navigation.navigate('AlphaUdaciDeckDetails', {title: input, count: 0})
    }
  }
  render() {
    return (
      <View style={[styles.container, styles.containerOne]}>
         <View style={styles.containerTwo}>
            <Text style={styles.text}>Name of the deck</Text>
            <Text style={styles.text}>(Please no spaces)</Text>
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
