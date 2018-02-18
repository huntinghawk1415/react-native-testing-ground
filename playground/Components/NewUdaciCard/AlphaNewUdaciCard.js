import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { addQuestion } from '../../utils/AsyncApi'

export default class AlphaNewUdaciCard extends Component {
  state = {
    questionInput: '',
    answerInput: '',
  }
  updateQuestionArray = (title, pair) => {
    const {questionInput, answerInput} = this.state
    if(questionInput.length > 0 && answerInput.length > 0) {
      addQuestion(title, pair)
      alert('Saved!')
      this.props.navigation.navigate('Home')
    } else {
      alert('Please make sure you fill out both fields before saving')
    }
  }
  render() {
    const {questionInput, answerInput} = this.state
    const {title} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Question</Text>
        <TextInput
          autoFocus={true}
          onChangeText={(questionInput) => this.setState({
            questionInput
          })}
          selectionColor={'deepskyblue'}
          underlineColorAndroid={'transparent'}
          style={styles.input}
        />
        <Text style={styles.text}>Answer</Text>
        <TextInput
          onChangeText={(answerInput) => this.setState({
            answerInput
          })}
          selectionColor={'deepskyblue'}
          underlineColorAndroid={'transparent'}
          style={styles.input}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.updateQuestionArray(title, this.state)}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginTop: 30,
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
})
