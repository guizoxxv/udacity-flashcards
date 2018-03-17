import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Decks from './Decks'
import Deck from './Deck'
import AddCard from './AddCard'
import CreateDeck from './CreateDeck'
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
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
    }
  },
})

export default class Root extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:Constants.statusBarHeight}} />
        <Stack />
      </View>
    )
  }
}