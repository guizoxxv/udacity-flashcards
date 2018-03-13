import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import CreateDeck from './components/CreateDeck'
import { Constants } from 'expo'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

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
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <View style={{height:Constants.statusBarHeight}} />
          <Stack />
        </View>
      </Provider>
    )
  }
}