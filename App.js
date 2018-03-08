import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Decks from './components/Decks'
import CreateDeck from './components/CreateDeck'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
    }
  },
}, {
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: 'purple',
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
        <View style={{height:Constants.statusBarHeight}}/>
          <Tabs/>
        </View>
      </Provider>
    )
  }
}
