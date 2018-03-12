import React, { Component } from 'react'
import { View } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Decks from './components/Decks'
import CreateDeck from './components/CreateDeck'
import { Constants } from 'expo'

const Stack = StackNavigator({
  Home: {
    screen: Home
  },
})

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

function Home() {
  return (
    <View style={{flex:1}}>
      <View style={{height:Constants.statusBarHeight}} />
      <Tabs />
    </View>
  )
}

export default class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}
