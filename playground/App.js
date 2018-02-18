import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import AlphaHome from './Components/Home/AlphaHome'
import AlphaQuiz from './Components/Quiz/AlphaQuiz'
import AlphaNewUdaciDeck from './Components/NewUdaciDeck/AlphaNewUdaciDeck'
import AlphaNewUdaciCard from './Components/NewUdaciCard/AlphaNewUdaciCard'
import AlphaUdaciDeckDetails from './Components/UdaciDeckDetails/AlphaUdaciDeckDetails'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

const Tabs = TabNavigator({
  Home: {
    screen: AlphaHome,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  NewDeck: {
    screen: AlphaNewUdaciDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
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
  },
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
  AlphaNewUdaciCard: {
    screen: AlphaNewUdaciCard,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'deepskyblue'
      }
    }
  },
  AlphaUdaciDeckDetails: {
    screen: AlphaUdaciDeckDetails,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'deepskyblue'
      }
    }
  },
  AlphaQuiz: {
    screen: AlphaQuiz,
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
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'deepskyblue', height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor='deepskyblue' />
        </View>
        <Stack />
      </View>
    )
  }
}
