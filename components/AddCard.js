import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class AddCard extends Component {
  render() {
    let deck = this.props.navigation.state.params.deck

    return (
      <View style={{flex:1, padding:10}}>
        <Text>AddCard View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnTxt: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  }
})