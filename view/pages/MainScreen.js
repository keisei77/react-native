import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  static propTypes = {
    navigation: PropTypes.string.isRequired
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={
            () => navigate('Profile', { name: 'Jane' })
          }
        ></Button>
        <Button
          title="Go to Timer"
          onPress={
            () => navigate('Timer')
          }
        ></Button>
      </View>
    )
  }
}
