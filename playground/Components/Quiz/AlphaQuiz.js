import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { getQuestions } from '../../utils/AsyncApi'

export default class AlphaQuiz extends Component {
  state = {
    questions: null,
    total: 0,
		question: 1,
		correct: 0,
		incorrect: 0,
		flipped: false,
		end: false
  }
  componentDidMount() {
    AsyncStorage.getItem(this.props.navigation.state.params.title)
      .then(data => this.setState({
        questions: JSON.parse(data).questions,
        total: JSON.parse(data).questions.length
      }))
  }
	handleFlip = () => {
		this.setState({
			flipped: !this.state.flipped
		})
	}
	handleCorrect = () => {
		const { question, total, correct } = this.state
		this.setState({
			question: question + 1,
			correct: correct + 1,
			flipped: false,
			end: question === total ? true : false
		})
	}
	handleIncorrect = () => {
		const { question, total, incorrect } = this.state
		this.setState({
			question: question + 1,
			incorrect: incorrect + 1,
			flipped: false,
			end: question === total ? true : false
		})
	}
	handleRestart = () => {
		const { question, correct, incorrect, flipped, end } = this.state
		this.setState({
			question: 1,
			correct: 0,
			incorrect: 0,
			flipped: false,
			end: false
		})
	}
  render() {
    const {questions, total, question, correct, incorrect, flipped, end} = this.state
    return (
      questions
        ? end
          ? <View style={styles.containerLoading}>
              <Text style={[styles.text, {fontSize: 50, padding: 20}]}>You got</Text>
              <Text style={[styles.text, {fontSize: 50, padding: 20}]}>{correct} out of {total}</Text>
              <Text style={[styles.text, {fontSize: 50, padding: 20}]}>correct!</Text>
              <TouchableOpacity style={[styles.btn, {backgroundColor: 'deepskyblue'}]} onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.text}>Choose another deck</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, {backgroundColor: 'deepskyblue'}]} onPress={this.handleRestart}>
                <Text style={styles.text}>Restart the quiz</Text>
              </TouchableOpacity>
            </View>
          : <View style={styles.container}>
              <View style={styles.innerContainerOne}>
                <Text style={styles.title}>Question {question}/{total}</Text>
                <Text style={styles.subtitle}>{flipped ? questions[question - 1].answerInput : questions[question - 1].questionInput}</Text>
              </View>
              <View style={styles.innerContainerTwo}>
                <TouchableOpacity style={[styles.btn, {backgroundColor: 'deepskyblue'}]} onPress={this.handleFlip}>
                  <Text style={styles.text}>Flip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor: 'forestgreen'}]} onPress={this.handleCorrect}>
                  <Text style={styles.text}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor: 'crimson'}]} onPress={this.handleIncorrect}>
                  <Text style={styles.text}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
        : <View style={styles.containerLoading}>
            <ActivityIndicator size='large' color='white' />
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue'
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
