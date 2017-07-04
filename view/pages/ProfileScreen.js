import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import Blink from '../components/Blink'
import PizzaTranslator from '../components/PizzaTranslator'
// import IScrolledDownAndWhatHappenedNextShockedMe from '../components/IScrolledDownAndWhatHappenedNextShockedMe'
import FlatListBasics from '../components/FlatListBasics'

export default class ProfileScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.bigblue}>I'm keisei, I come back again.</Text>
        <View style={styles.scaleContainer}>
          <View style={styles.scaleOneTime}></View>
          <View style={styles.scaleTwoTimes}></View>
          <View style={styles.scaleThreeTimes}></View>
        </View>
        <PizzaTranslator />
        <FlatListBasics />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  },
  scaleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  scaleOneTime: {
    // flex: 1,
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  scaleTwoTimes: {
    // flex: 2,
    width: 100,
    height: 100,
    backgroundColor: 'skyblue'
  },
  scaleThreeTimes: {
    // flex: 3,
    width: 150,
    height: 150,
    backgroundColor: 'steelblue'
  }
})
