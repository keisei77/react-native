import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

export default class SectionListBasics extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        { title: 'D', data: ['Devin'] },
        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] }
      ]
    }
  }

  handleRenderItem = (item, index) => {
    return (
      <Text style={styles.item}>{item}</Text>
    )
  }

  handleSectionHeader = (section) => {
    return (
      <Text style={styles.sectionHeader}>{section.title}</Text>
    )
  }

  handleKeyExtractor = (section, index) => {
    return `${section}key-${index}`
  }

  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderItem={({ item, index }) => this.handleRenderItem(item, index)}
          renderSectionHeader={({ section }) => this.handleSectionHeader(section)}
          keyExtractor={(section, index) => this.handleKeyExtractor(section, index)}
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
