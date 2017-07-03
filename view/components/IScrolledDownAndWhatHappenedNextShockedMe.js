import React, { Component } from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
import Dimensions from 'Dimensions'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render () {
    return (
      <ScrollView>
        <Image style={{ width: Dimensions.get('window').width, resizeMode: Image.resizeMode.contain }} source={require('../images/baymax.jpg')} />
      </ScrollView>
    )
  }
}