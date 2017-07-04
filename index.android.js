/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry
} from 'react-native'

import { StackNavigator } from 'react-navigation'
import MainScreen from './view/pages/MainScreen'
import ProfileScreen from './view/pages/ProfileScreen'

const keisei = StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen }
})

AppRegistry.registerComponent('keisei', () => keisei)
