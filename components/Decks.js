import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native'

export default class Decks extends Component {
  state = {
    decks: null
  }

  componentDidMount() {
    AsyncStorage.getItem('decks').then((decks) => {
      this.setState({
        decks: decks === null ? null : JSON.parse(decks)
      })
    })
  }

  render() {
    let decks = this.state.decks

    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
        <TouchableOpacity style={styles.createDeckBtn} onPress={() => this.props.navigation.navigate('CreateDeck')}>
          <Text style={{color:'white', fontSize:25}}>Create Deck</Text>
        </TouchableOpacity>

        {decks === null
          ?
            <Text style={{fontSize:20}}>No decks available</Text>
          :
            Object.keys(decks).map((key) => (
              <View key={key} style={styles.deck}>
                <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>{decks[key].title}</Text>
              </View>
            ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    margin: 10,
    padding: 20,
    minWidth: 200,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
    createDeckBtn: {
    backgroundColor: 'lightblue',
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
})