import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class FlatListBasics extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        { key: 'Devin' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
        { key: 'John1' },
        { key: 'Jillian2' },
        { key: 'Jimmy3' },
        { key: 'Julie5' }
      ]
    }
  }

  handleRenderItem = (item) => {
    return (
      <Text style={styles.item}>{item.key}</Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.handleRenderItem(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
