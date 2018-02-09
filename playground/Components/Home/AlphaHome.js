import React, { Component } from 'react'
import HomeExistingUser from './HomeExistingUser'
import HomeNewUser from './HomeNewUser'

//displays new user or existing user home dependent on data existing in AsyncStorage

export default class AlphaHome extends Component {
  state = {
    userNew: false,
  }
  render() {
    const {userNew} = this.state
    return (
      userNew
        ? <HomeNewUser />
        : <HomeExistingUser />
    )
  }
}
