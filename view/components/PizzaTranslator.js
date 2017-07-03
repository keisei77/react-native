import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleChange = (text) => {
    this.setState({
      text: text
    })
  }

  handleTranslator = () => {
    return this.state.text.split(' ').map((word) => word && '🍕').join(' ')
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here to translate!"
          onChangeText={this.handleChange}
        />
        <Text style={styles.translator}>
          {this.handleTranslator()}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputStyle: {
    height: 40,
  },
  translator: {
    padding: 10,
    fontSize: 42,
  },
})