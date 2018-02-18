import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class AlphaUdaciDeckDetails extends Component {
  addCard = title => {
    this.props.navigation.navigate('AlphaNewUdaciCard', {title})
  }
  takeQuiz = title => {
    this.props.navigation.state.params.count < 1
      ? alert("You can't take a quiz without any cards in your deck; tap the 'add' button first!")
      : this.props.navigation.navigate('AlphaQuiz', {title})
  }
  render() {
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>
        <View style={styles.innerContainerOne}>
          <Text style={styles.title}>{params.title}</Text>
          <Text style={styles.subtitle}>{params.count}</Text>
        </View>
        <View style={styles.innerContainerTwo}>
          <TouchableOpacity style={styles.btn} onPress={() => this.addCard(params.title)}>
            <Text style={styles.text}>Add a card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => this.takeQuiz(params.title)}>
            <Text style={styles.text}>Take a quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainerOne: {
    flex: 0.5,
    borderColor: 'lightskyblue',
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainerTwo: {
    flex: 0.5,
    backgroundColor: 'lightskyblue',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 35,
    color: 'darkgray',
  },
  btn: {
    marginTop: 20,
    backgroundColor: 'deepskyblue',
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    minWidth: '70%',
  },
  text: {
    color: 'white',
  }
})
