import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Deck from './components/Deck'
import CreateDeck from './components/CreateDeck'
import { Constants } from 'expo'

const Stack = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'Decks',
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create Deck',
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
    }
  },
})

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:Constants.statusBarHeight}} />
        <Stack />
      </View>
    )
  }
}