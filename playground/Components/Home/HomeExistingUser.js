import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native'
import UdaciDeck from '../Reusable/UdaciDeck'
import { getAllData } from '../../utils/AsyncApi'

export default class HomeExistingUser extends Component {
  state = {
    decks: null,
  }
  componentDidMount() {
    let decks = getAllData()
    setTimeout(() => {
      this.setState({
        decks
      })
    }, 1000)
  }
  showDetails = (title, count) => {
    this.props.navigation.navigate('AlphaUdaciDeckDetails', {title, count})
  }
  render() {
    const {decks} = this.state
    return (
      decks
      ? <ScrollView contentContainerStyle={styles.container}>
            {decks.map(s => <UdaciDeck key={s[1].title} name={s[1].title} count={s[1].questions.length} method={this.showDetails} />)}
        </ScrollView>
      : <View style={[styles.container, {flex: 1, justifyContent: 'center'}]}>
          <ActivityIndicator size='large' color='white' />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: 'lightskyblue',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
})
