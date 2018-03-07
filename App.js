import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import { Constants } from 'expo'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
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
      <View style={{flex:1}}>
      <View style={{height:Constants.statusBarHeight}}/>
        <Tabs/>
      </View>
    )
  }
}
