import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AlphaHome from './Components/Home/AlphaHome'
import AlphaQuiz from './Components/Quiz/AlphaQuiz'
import AlphaNewUdaciDeck from './Components/NewUdaciDeck/AlphaNewUdaciDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Home: {
    screen: AlphaHome,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Quiz: {
    screen: AlphaQuiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
    }
  }
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: 'white',
    indicatorStyle: {
      backgroundColor: 'white'
    },
    style: {
      height: 50,
      borderBottomColor: 'white',
      backgroundColor: 'deepskyblue',
    }
  }
})

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  AlphaNewUdaciDeck: {
    screen: AlphaNewUdaciDeck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'deepskyblue'
      }
    }
  },
})

export default class App extends Component {
  render() {
    return (
      <Stack />
    )
  }
}
