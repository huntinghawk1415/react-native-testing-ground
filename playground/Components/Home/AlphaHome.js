import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import HomeExistingUser from './HomeExistingUser'
import HomeNewUser from './HomeNewUser'

//displays new user or existing user home dependent on data existing in AsyncStorage

export default class AlphaHome extends Component {
  state = {
    newUser: false,
  }
  componentDidMount() {
    AsyncStorage.getAllKeys().then(data => data.length > 0
      ? this.setState({
        newUser: true
      })
      : this.setState({
        newUser: false
      }))
  }
  render() {
    console.log()
    return (
      this.state.newUser
        ? <HomeExistingUser />
        : <HomeNewUser navigation={this.props.navigation} />
    )
  }
}
