import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Blink extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  constructor (props) {
    super(props)
    this.state = { showText: true }

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText }
      })
    }, 1000)
  }

  render () {
    let display = this.state.showText ? this.props.text : ''
    return (
      <Text>{ display }</Text>
    )
  }
}
